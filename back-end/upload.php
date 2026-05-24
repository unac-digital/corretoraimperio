<?php
header('Content-Type: application/json');
header('Cache-Control: no-store');

session_start();

if (empty($_SESSION['editor_auth'])) {
    http_response_code(401);
    echo json_encode(['error' => 'Não autenticado']);
    exit;
}

require_once __DIR__ . '/config.php';

if (empty($_FILES['file'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Nenhum arquivo enviado']);
    exit;
}

$file = $_FILES['file'];

if ($file['error'] !== UPLOAD_ERR_OK) {
    http_response_code(400);
    echo json_encode(['error' => 'Erro no upload (código ' . $file['error'] . ')']);
    exit;
}

if ($file['size'] > MAX_UPLOAD_BYTES) {
    http_response_code(400);
    echo json_encode(['error' => 'Arquivo muito grande (máx 8 MB)']);
    exit;
}

// Validar MIME real (não confiar no Content-Type do cliente)
$finfo    = new finfo(FILEINFO_MIME_TYPE);
$mime     = $finfo->file($file['tmp_name']);
$allowed  = [
    'image/jpeg'    => 'jpg',
    'image/png'     => 'png',
    'image/webp'    => 'webp',
    'image/gif'     => 'gif',
    'image/svg+xml' => 'svg',
];

if (!array_key_exists($mime, $allowed)) {
    http_response_code(400);
    echo json_encode(['error' => 'Tipo de arquivo não permitido']);
    exit;
}

// Criar pasta de uploads
if (!is_dir(UPLOAD_DIR)) {
    mkdir(UPLOAD_DIR, 0755, true);
}

// Bloquear execução de PHP dentro de uploads
$htaccess = UPLOAD_DIR . '.htaccess';
if (!file_exists($htaccess)) {
    file_put_contents($htaccess, "Options -ExecCGI\nphp_flag engine off\n");
}

// Nome único para o arquivo
$slug     = preg_replace('/[^a-z0-9\-_]/', '', strtolower($_POST['key'] ?? 'img'));
$ext      = $allowed[$mime];
$filename = $slug . '-' . bin2hex(random_bytes(6)) . '.' . $ext;
$dest     = UPLOAD_DIR . $filename;

if (!move_uploaded_file($file['tmp_name'], $dest)) {
    http_response_code(500);
    echo json_encode(['error' => 'Falha ao salvar o arquivo no servidor']);
    exit;
}

echo json_encode(['url' => UPLOAD_URL . $filename]);
