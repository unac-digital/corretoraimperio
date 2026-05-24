<?php
header('Content-Type: application/json');
header('Cache-Control: no-store, no-cache');

session_start();

echo json_encode([
    'authenticated' => !empty($_SESSION['editor_auth']),
]);
