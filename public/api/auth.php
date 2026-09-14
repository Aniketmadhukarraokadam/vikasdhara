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

function get_otp_storage_path($email) {
    return sys_get_temp_dir() . '/vvf_otp_' . hash('sha256', 'vvf_salt_' . $email) . '.json';
}

// ACTION: SEND OTP VIA OFFICIAL EMAIL
if ($action === 'send_otp') {
    if (!is_allowed_domain($email, $allowed_domains)) {
        http_response_code(403);
        echo json_encode([
            "success" => false,
            "error" => "Access denied. Only @vikasdharafoundation.org domain emails are permitted."
        ]);
        exit;
    }

    $filePath = get_otp_storage_path($email);
    
    // Rate limit check: 30 seconds
    if (file_exists($filePath)) {
        $existing = json_decode(file_get_contents($filePath), true);
        if ($existing && (time() - $existing['created_at']) < 30) {
            http_response_code(429);
            echo json_encode([
                "success" => false,
                "error" => "Please wait 30 seconds before requesting a new OTP."
            ]);
            exit;
        }
    }

    // Generate cryptographic 6-digit numeric OTP
    $otp = sprintf("%06d", random_int(100000, 999999));
    
    // Store hashed OTP on server
    $record = [
        "hash" => hash('sha256', $otp),
        "created_at" => time(),
        "expires_at" => time() + 600, // 10 minutes
        "attempts" => 0
    ];
    file_put_contents($filePath, json_encode($record));

    // Send Real Email via PHP Mail
    $subject = "VVF Admin Portal Security OTP: " . $otp;
    
    $message = "<!DOCTYPE html>
<html>
<head><meta charset='utf-8'></head>
<body style='font-family: Arial, sans-serif; background-color: #f4f7f9; padding: 20px;'>
  <div style='max-width: 500px; margin: auto; background: #ffffff; padding: 30px; border-radius: 12px; border: 1px solid #e2e8f0;'>
    <div style='text-align: center; margin-bottom: 20px;'>
      <h2 style='color: #075985; margin: 0;'>VORTEXSOFT VIKASDHARA FOUNDATION</h2>
      <p style='color: #64748b; font-size: 12px; margin: 5px 0 0;'>Administrative Portal • One-Time Password</p>
    </div>
    <div style='background: #f0f9ff; border: 1px solid #bae6fd; border-radius: 8px; padding: 20px; text-align: center; margin: 20px 0;'>
      <p style='color: #0369a1; font-size: 13px; font-weight: bold; margin: 0 0 10px;'>YOUR 6-DIGIT VERIFICATION CODE</p>
      <div style='font-size: 32px; font-weight: 900; letter-spacing: 6px; color: #075985; font-family: monospace;'>{$otp}</div>
      <p style='color: #64748b; font-size: 11px; margin: 10px 0 0;'>Valid for 10 minutes. Do not share this code.</p>
    </div>
    <p style='color: #475569; font-size: 13px; line-height: 1.6;'>
      You received this security verification code because a login request was initiated for your official domain email: <strong>{$email}</strong>.
    </p>
    <p style='color: #94a3b8; font-size: 11px; margin-top: 20px; border-top: 1px solid #f1f5f9; padding-top: 15px;'>
      If you did not initiate this request, please notify the trustee administration immediately.
    </p>
  </div>
</body>
</html>";

    $headers = "MIME-Version: 1.0\r\n" .
               "Content-type: text/html; charset=UTF-8\r\n" .
               "From: VVF Security <noreply@vikasdharafoundation.org>\r\n" .
               "Reply-To: office@vikasdharafoundation.org\r\n" .
               "X-Mailer: PHP/" . phpversion();

    @mail($email, $subject, $message, $headers);

    // Return response without disclosing the OTP code
    echo json_encode([
        "success" => true,
        "message" => "A 6-digit security OTP has been sent to your email inbox: " . $email,
        "expires_in" => 600
    ]);
    exit;
}

// ACTION: VERIFY OTP ON SERVER
if ($action === 'verify_otp') {
    $enteredOtp = trim($data['otp'] ?? '');
    
    if (empty($email) || empty($enteredOtp)) {
        http_response_code(400);
        echo json_encode(["success" => false, "error" => "Email and OTP code are required."]);
        exit;
    }

    $filePath = get_otp_storage_path($email);
    
    if (!file_exists($filePath)) {
        http_response_code(400);
        echo json_encode(["success" => false, "error" => "No active OTP request found. Please request a new code."]);
        exit;
    }

    $record = json_decode(file_get_contents($filePath), true);

    // Check expiration
    if (time() > $record['expires_at']) {
        @unlink($filePath);
        http_response_code(400);
        echo json_encode(["success" => false, "error" => "OTP code has expired. Please request a new one."]);
        exit;
    }

    // Check max attempts
    if ($record['attempts'] >= 5) {
        @unlink($filePath);
        http_response_code(429);
        echo json_encode(["success" => false, "error" => "Too many incorrect attempts. Please request a new OTP."]);
        exit;
    }

    // Verify Hash
    $enteredHash = hash('sha256', $enteredOtp);
    
    if (hash_equals($record['hash'], $enteredHash)) {
        // Success: Clean up OTP record
        @unlink($filePath);
        
        // Role Assignment: ONLY admin@vikasdharafoundation.org is Super Administrator
        $role = "Authorized Staff";
        if ($email === 'admin@vikasdharafoundation.org') {
            $role = "Super Administrator";
        } else if (strpos($email, 'trustee') !== false) {
            $role = "Trustee";
        } else if (strpos($email, 'director') !== false) {
            $role = "Managing Director";
        } else if (strpos($email, 'csr') !== false) {
            $role = "CSR Liaison";
        }

        $token = "vvf_token_" . bin2hex(random_bytes(16)) . "_" . time();

        echo json_encode([
            "success" => true,
            "message" => "OTP Verified Successfully",
            "token" => $token,
            "role" => $role,
            "email" => $email
        ]);
        exit;
    } else {
        // Increment failed attempts
        $record['attempts'] += 1;
        file_put_contents($filePath, json_encode($record));
        $remaining = 5 - $record['attempts'];

        http_response_code(401);
        echo json_encode([
            "success" => false,
            "error" => "Invalid OTP code. Please check your email inbox ({$remaining} attempts remaining)."
        ]);
        exit;
    }
}

echo json_encode([
    "status" => "active",
    "service" => "VVF Secure Domain Email OTP Authentication Engine",
    "allowed_domains" => $allowed_domains
]);
