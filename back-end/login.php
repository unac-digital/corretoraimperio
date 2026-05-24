<?php
ini_set('session.cookie_httponly', '1');
ini_set('session.cookie_samesite', 'Strict');
session_start();

require_once __DIR__ . '/config.php';

// Gerar CSRF token
if (empty($_SESSION['csrf_token'])) {
    $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
}

$error = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (!hash_equals($_SESSION['csrf_token'], $_POST['csrf'] ?? '')) {
        $error = 'Requisição inválida. Recarregue a página e tente novamente.';
    } elseif (ADMIN_PASSWORD_HASH === '') {
        $error = 'Painel não configurado. Defina ADMIN_PASSWORD_HASH em back-end/config.php.';
    } else {
        $user = trim($_POST['user'] ?? '');
        $pass = $_POST['pass'] ?? '';

        if ($user === ADMIN_USER && password_verify($pass, ADMIN_PASSWORD_HASH)) {
            session_regenerate_id(true);
            $_SESSION['editor_auth'] = true;
            $_SESSION['editor_since'] = time();
            $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
            header('Location: /');
            exit;
        }

        sleep(1);
        $error = 'Usuário ou senha incorretos.';
    }
}
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login de Administrador Império Corretora</title>
  <meta name="robots" content="noindex, nofollow">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:opsz,wght@9..40,400;9..40,500&display=swap" rel="stylesheet">
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: 'DM Sans', sans-serif;
      background: #1a3d2b;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1.25rem;
    }
    body::before {
      content: '';
      position: fixed;
      inset: 0;
      background-image: radial-gradient(circle at 20% 80%, rgba(201,168,76,0.06) 0%, transparent 50%),
                        radial-gradient(circle at 80% 20%, rgba(201,168,76,0.04) 0%, transparent 50%);
      pointer-events: none;
    }
    .card {
      background: #fff;
      border-radius: 14px;
      padding: 2.75rem 2.25rem 2rem;
      width: 100%;
      max-width: 400px;
      box-shadow: 0 24px 80px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.06);
      position: relative;
    }
    .brand { text-align: center; margin-bottom: 2rem; }
    .brand__crown { width: 52px; height: 52px; margin: 0 auto 1rem; display: block; }
    .brand__name { font-family: 'DM Serif Display', serif; font-size: 1.625rem; color: #c9a84c; display: block; line-height: 1.1; }
    .brand__sub { font-size: .7rem; color: #999; letter-spacing: .12em; text-transform: uppercase; display: block; margin-top: .35rem; }
    .divider { height: 1px; background: linear-gradient(to right, transparent, #e8e8e8, transparent); margin: 1.75rem 0; }
    .card__heading { font-family: 'DM Serif Display', serif; font-size: 1.125rem; color: #1a3d2b; text-align: center; margin-bottom: 1.75rem; }
    .alert { background: #fff1f0; border: 1px solid #ffa39e; border-radius: 8px; color: #a8071a; font-size: .875rem; line-height: 1.5; padding: .75rem 1rem; margin-bottom: 1.5rem; display: flex; align-items: flex-start; gap: .5rem; }
    .alert::before { content: '⚠'; flex-shrink: 0; margin-top: .05em; }
    .field { margin-bottom: 1.25rem; }
    .field label { display: block; font-size: .7rem; font-weight: 500; color: #555; letter-spacing: .08em; text-transform: uppercase; margin-bottom: .45rem; }
    .field input { width: 100%; height: 46px; padding: 0 1rem; border: 1.5px solid #ddd; border-radius: 8px; font-family: inherit; font-size: .9375rem; color: #111; outline: none; transition: border-color .15s, box-shadow .15s; background: #fafafa; }
    .field input:focus { border-color: #c9a84c; background: #fff; box-shadow: 0 0 0 3px rgba(201,168,76,.15); }
    .btn-submit { width: 100%; height: 50px; background: #c9a84c; color: #1a3d2b; border: none; border-radius: 8px; font-family: 'DM Serif Display', serif; font-size: 1.0625rem; cursor: pointer; transition: background .15s, transform .1s; margin-top: .5rem; letter-spacing: .01em; }
    .btn-submit:hover { background: #d4b565; }
    .btn-submit:active { transform: scale(.98); }
    .back-link { display: block; text-align: center; margin-top: 1.5rem; font-size: .8125rem; color: #aaa; text-decoration: none; transition: color .15s; }
    .back-link:hover { color: #1a3d2b; }
  </style>
</head>
<body>
  <div class="card">
    <div class="brand">
      <svg class="brand__crown" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path d="M2,38 L2,28 L10,12 L16,22 L20,6 L24,22 L30,12 L38,28 L38,38 Z" fill="#c9a84c"/>
      </svg>
      <span class="brand__name">Império Corretora</span><br>
      <span class="brand__sub">Área do Administrador</span>
    </div>

    <div class="divider" aria-hidden="true"></div>

    <h1 class="card__heading">Informe suas credenciais</h1>

    <?php if ($error !== ''): ?>
    <div class="alert" role="alert">
      <?= htmlspecialchars($error, ENT_QUOTES, 'UTF-8') ?>
    </div>
    <?php endif; ?>

    <form method="POST" action="/adm-login" novalidate>
      <input type="hidden" name="csrf" value="<?= htmlspecialchars($_SESSION['csrf_token'], ENT_QUOTES, 'UTF-8') ?>">

      <div class="field">
        <label for="user">Usuário</label>
        <input type="text" id="user" name="user" autocomplete="username" required autofocus
               value="<?= isset($_POST['user']) ? htmlspecialchars($_POST['user'], ENT_QUOTES, 'UTF-8') : '' ?>">
      </div>

      <div class="field">
        <label for="pass">Senha</label>
        <input type="password" id="pass" name="pass" autocomplete="current-password" required>
      </div>

      <button class="btn-submit" type="submit">Entrar no painel</button>
    </form>

    <a href="/" class="back-link">← Voltar ao site</a>
  </div>
</body>
</html>
