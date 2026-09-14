<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

$uploadDir = __DIR__ . "/../images/uploads/";

if (!is_dir($uploadDir)) {
    mkdir($uploadDir, 0755, true);
}

if (!isset($_FILES['image'])) {
    http_response_code(400);
    echo json_encode(["success" => false, "error" => "No image file provided."]);
    exit;
}

$file = $_FILES['image'];
$fileName = basename($file['name']);
$fileExt = strtolower(pathinfo($fileName, PATHINFO_EXTENSION));

$allowedExts = ['jpg', 'jpeg', 'png', 'webp', 'gif', 'svg'];

if (!in_array($fileExt, $allowedExts)) {
    http_response_code(400);
    echo json_encode(["success" => false, "error" => "Invalid file extension. Allowed: jpg, jpeg, png, webp, gif, svg."]);
    exit;
}

if ($file['size'] > 10 * 1024 * 1024) { // 10MB limit
    http_response_code(400);
    echo json_encode(["success" => false, "error" => "File exceeds 10MB limit."]);
    exit;
}

$newFileName = "blog_" . time() . "_" . bin2hex(random_bytes(4)) . "." . $fileExt;
$targetPath = $uploadDir . $newFileName;

if (move_uploaded_file($file['tmp_name'], $targetPath)) {
    $imageUrl = "/images/uploads/" . $newFileName;
    echo json_encode([
        "success" => true,
        "url" => $imageUrl,
        "filename" => $newFileName,
        "size" => $file['size']
    ]);
} else {
    http_response_code(500);
    echo json_encode(["success" => false, "error" => "Failed to save uploaded file."]);
}
