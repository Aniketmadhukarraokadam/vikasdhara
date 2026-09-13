<?php
// Fallback router for React SPA on LiteSpeed / Apache
$requested = $_SERVER['REQUEST_URI'];
$filePath = __DIR__ . parse_url($requested, PHP_URL_PATH);

if (is_file($filePath)) {
    return false;
}

include __DIR__ . '/index.html';
?>
