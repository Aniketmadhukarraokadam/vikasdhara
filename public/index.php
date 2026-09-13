<?php
// Auto-delete Hostinger placeholder if present
if (file_exists(__DIR__ . '/default.php')) {
    @unlink(__DIR__ . '/default.php');
}

// Serve Vite SPA
if (file_exists(__DIR__ . '/index.html')) {
    include __DIR__ . '/index.html';
    exit;
}
?>
