<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

$data = json_decode(file_get_contents("php://input"), true) ?? $_POST;

if (empty($data)) {
    http_response_code(400);
    echo json_encode(["success" => false, "error" => "No inquiry data received."]);
    exit;
}

$type = $data['type'] ?? 'general_inquiry';
$name = trim($data['name'] ?? 'Anonymous');
$email = trim($data['email'] ?? '');
$mobile = trim($data['mobile'] ?? '');
$organization = trim($data['organization'] ?? '');
$location = trim($data['location'] ?? 'Maharashtra');
$subject = trim($data['subject'] ?? 'Official Inquiry');
$message = trim($data['message'] ?? '');
$timestamp = date("Y-m-d H:i:s");

// Save to persistent file storage
$storageFile = sys_get_temp_dir() . '/vvf_public_inquiries.json';
$existing = [];
if (file_exists($storageFile)) {
    $existing = json_decode(file_get_contents($storageFile), true) ?? [];
}

$record = [
    "id" => "app_" . time() . "_" . random_int(1000, 9999),
    "type" => $type,
    "name" => $name,
    "email" => $email,
    "mobile" => $mobile,
    "organization" => $organization,
    "location" => $location,
    "subject" => $subject,
    "message" => $message,
    "status" => "new",
    "createdAt" => $timestamp
];

array_unshift($existing, $record);
file_put_contents($storageFile, json_encode($existing, JSON_PRETTY_PRINT));

// Send Notification Email to Trust Office
$toEmail = "partnerships@vikasdharafoundation.org, info@vikasdharafoundation.org";
$emailSubject = "🇮🇳 New Vikasdhara Portal Inquiry: [" . strtoupper($type) . "] from " . $name;

$emailBody = "<!DOCTYPE html>
<html>
<body style='font-family: Arial, sans-serif; background-color: #f8fafc; padding: 20px;'>
  <div style='max-width: 600px; margin: auto; background: #ffffff; padding: 24px; border-radius: 12px; border: 1px solid #e2e8f0;'>
    <h2 style='color: #075985; margin-top: 0;'>New Website Inquiry Received</h2>
    <table style='width: 100%; border-collapse: collapse; font-size: 13px; color: #334155;'>
      <tr><td style='padding: 8px; font-weight: bold; width: 30%;'>Category:</td><td style='padding: 8px;'>" . htmlspecialchars($type) . "</td></tr>
      <tr><td style='padding: 8px; font-weight: bold;'>Name:</td><td style='padding: 8px;'>" . htmlspecialchars($name) . "</td></tr>
      <tr><td style='padding: 8px; font-weight: bold;'>Email:</td><td style='padding: 8px;'><a href='mailto:" . htmlspecialchars($email) . "'>" . htmlspecialchars($email) . "</a></td></tr>
      <tr><td style='padding: 8px; font-weight: bold;'>Phone / WhatsApp:</td><td style='padding: 8px;'>" . htmlspecialchars($mobile) . "</td></tr>
      <tr><td style='padding: 8px; font-weight: bold;'>Organisation:</td><td style='padding: 8px;'>" . htmlspecialchars($organization) . "</td></tr>
      <tr><td style='padding: 8px; font-weight: bold;'>Location:</td><td style='padding: 8px;'>" . htmlspecialchars($location) . "</td></tr>
      <tr><td style='padding: 8px; font-weight: bold;'>Subject:</td><td style='padding: 8px;'>" . htmlspecialchars($subject) . "</td></tr>
    </table>
    <div style='background: #f0f9ff; border-left: 4px solid #0284c7; padding: 12px; margin-top: 15px;'>
      <strong>Message / Requirement:</strong><br/>
      <p style='margin: 6px 0 0; white-space: pre-line;'>" . htmlspecialchars($message) . "</p>
    </div>
    <p style='font-size: 11px; color: #94a3b8; margin-top: 20px;'>Received at: " . $timestamp . " IST via vikasdharafoundation.org</p>
  </div>
</body>
</html>";

$headers = "MIME-Version: 1.0\r\n" .
           "Content-type: text/html; charset=UTF-8\r\n" .
           "From: VVF Portal <noreply@vikasdharafoundation.org>\r\n" .
           "Reply-To: " . ($email ?: "info@vikasdharafoundation.org") . "\r\n" .
           "X-Mailer: PHP/" . phpversion();

@mail($toEmail, $emailSubject, $emailBody, $headers);

echo json_encode([
    "success" => true,
    "message" => "Your inquiry has been registered successfully with the Foundation Trust Desk.",
    "id" => $record["id"]
]);
