<?php
header('Content-Type: application/json');
header('Cache-Control: no-store');

session_start();

if (empty($_SESSION['editor_auth'])) {
    http_response_code(401);
    echo json_encode(['error' => 'Não autenticado']);
    exit;
}

$input   = file_get_contents('php://input');
$changes = json_decode($input, true);

if (!is_array($changes) || empty($changes)) {
    http_response_code(400);
    echo json_encode(['error' => 'Dados inválidos']);
    exit;
}

require_once __DIR__ . '/config.php';

// ── Persistir em content.json ───────────────────────────────────
$contentPath = SITE_ROOT . 'content.json';
$stored      = file_exists($contentPath)
    ? (json_decode(file_get_contents($contentPath), true) ?: [])
    : [];

foreach ($changes as $key => $change) {
    if (!preg_match('/^[a-z0-9\-_]+$/i', $key)) continue;
    $stored[$key] = $change;
}

file_put_contents($contentPath, json_encode($stored, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));

// ── Atualizar arquivos HTML ─────────────────────────────────────
$textTags = 'h1|h2|h3|h4|h5|h6|p|span|li|blockquote';
$writeErrors = [];

foreach (HTML_FILES as $file) {
    if (!file_exists($file)) continue;

    $html     = file_get_contents($file);
    $original = $html;

    foreach ($changes as $key => $change) {
        if (!preg_match('/^[a-z0-9\-_]+$/i', $key)) continue;
        $ek = preg_quote($key, '/');

        if ($change['type'] === 'text') {
            $val = htmlspecialchars(trim($change['value']), ENT_NOQUOTES | ENT_HTML5, 'UTF-8');

            $html = preg_replace_callback(
                '/(<(?:' . $textTags . ')\b[^>]*\bdata-editable="' . $ek . '"[^>]*>)\s*[\s\S]*?\s*(<\/(?:' . $textTags . ')>)/i',
                static fn($m) => $m[1] . $val . $m[2],
                $html
            );

        } elseif ($change['type'] === 'image') {
            $url = filter_var($change['value'], FILTER_VALIDATE_URL) ? $change['value'] : '';
            if ($url === '') continue;

            $safe = htmlspecialchars($url, ENT_QUOTES, 'UTF-8');

            // <img src="...">
            $html = preg_replace_callback(
                '/<img\b[^>]*\bdata-editable="' . $ek . '"[^>]*/i',
                static fn($m) => preg_replace('/\bsrc="[^"]*"/', 'src="' . $safe . '"', $m[0]),
                $html
            );

            // style="background-image: url(...)"
            $html = preg_replace_callback(
                '/<[a-z][a-z0-9]*\b[^>]*\bdata-editable="' . $ek . '"[^>]*/i',
                static function ($m) use ($safe) {
                    if (!str_contains($m[0], 'background-image')) return $m[0];
                    return preg_replace(
                        "/background-image\s*:\s*url\(['\"]?[^'\")\s]*['\"]?\)/",
                        "background-image: url('" . $safe . "')",
                        $m[0]
                    );
                },
                $html
            );
        }
    }

    if ($html !== $original) {
        if (file_put_contents($file, $html) === false) {
            $writeErrors[] = basename($file);
        }
    }
}

if (!empty($writeErrors)) {
    http_response_code(500);
    echo json_encode(['error' => 'Falha ao salvar: ' . implode(', ', $writeErrors)]);
    exit;
}

echo json_encode(['success' => true]);
