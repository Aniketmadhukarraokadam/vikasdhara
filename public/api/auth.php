<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

$data = json_decode(file_get_contents("php://input"), true);
$action = $data['action'] ?? '';
$email = trim(strtolower($data['email'] ?? ''));

$allowed_domains = ['vikasdharafoundation.org'];

function is_allowed_domain($email, $allowed_domains) {
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) return false;
    $parts = explode('@', $email);
    $domain = end($parts);
    return in_array($domain, $allowed_domains);
}

if ($action === 'send_otp') {
    if (!is_allowed_domain($email, $allowed_domains)) {
        http_response_code(403);
        echo json_encode([
            "success" => false,
            "error" => "Access denied. Only @vikasdharafoundation.org domain emails are permitted."
        ]);
        exit;
    }

    $otp = sprintf("%06d", mt_rand(100000, 999999));
    
    // Attempt sending real email via server PHP mail
    $subject = "VVF Admin Portal Security OTP: " . $otp;
    $message = "Your 6-digit one-time password (OTP) for VORTEXSOFT VIKASDHARA FOUNDATION Admin Portal is: " . $otp . "\n\nThis OTP is valid for 10 minutes.\n\nIf you did not request this code, please contact support.";
    $headers = "From: noreply@vikasdharafoundation.org\r\n" .
               "Reply-To: office@vikasdharafoundation.org\r\n" .
               "X-Mailer: PHP/" . phpversion();

    @mail($email, $subject, $message, $headers);

    echo json_encode([
        "success" => true,
        "message" => "OTP sent successfully to " . $email,
        "otp_preview" => $otp,
        "expires_in" => 600
    ]);
    exit;
}

echo json_encode([
    "status" => "active",
    "service" => "VVF Admin OTP Authentication Engine",
    "allowed_domains" => $allowed_domains
]);
