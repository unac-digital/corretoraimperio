<?php
/*
 * Configuração do painel de administração.
 *
 * Para gerar o hash da senha, execute no terminal:
 *   php -r "echo password_hash('SUA_SENHA_AQUI', PASSWORD_DEFAULT);"
 *
 * Cole o hash gerado em ADMIN_PASSWORD_HASH abaixo.
 */

define('ADMIN_USER', 'admin');
define('ADMIN_PASSWORD_HASH', '$2y$10$cTPorrbRbTbOUCcYtJe2mefP20kGPBmOVHpQRFpbu6KJ2sPxKyQ/S'); // Senha local de teste: admin123

// Duração da sessão autenticada: 8 horas
define('SESSION_DURATION', 8 * 3600);

// Raiz do projeto (pasta que contém os arquivos do site e back-end/)
define('SITE_ROOT', dirname(__DIR__) . DIRECTORY_SEPARATOR);

// Pasta e URL pública de uploads
define('UPLOAD_DIR', SITE_ROOT . 'uploads' . DIRECTORY_SEPARATOR);
define('UPLOAD_URL', '/uploads/');

// Tamanho máximo por imagem: 8 MB
define('MAX_UPLOAD_BYTES', 8 * 1024 * 1024);

// Arquivos HTML que o editor pode atualizar
define('HTML_FILES', [
    SITE_ROOT . 'index.html',
    SITE_ROOT . 'empresas.html',
    SITE_ROOT . 'para-voce.html',
]);
