<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Methode nicht erlaubt']);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Ungueltige Anfrage']);
    exit;
}

$name = trim($input['name'] ?? '');
$email = trim($input['email'] ?? '');
$subject = trim($input['subject'] ?? '');
$message = trim($input['message'] ?? '');

// Validation
if (empty($name) || empty($email) || empty($subject) || empty($message)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Bitte füllen Sie alle Pflichtfelder aus.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Ungueltige E-Mail-Adresse.']);
    exit;
}

// Sanitize
$name = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
$subject = htmlspecialchars($subject, ENT_QUOTES, 'UTF-8');
$message = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');

$to = 'info@prestige777.de';
$emailSubject = 'Kontaktanfrage: ' . $subject;

$body = "Neue Kontaktanfrage über die Website:\n\n";
$body .= "Name: $name\n";
$body .= "E-Mail: $email\n";
$body .= "Betreff: $subject\n\n";
$body .= "Nachricht:\n$message\n";

$headers = "From: info@prestige777.de\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

$sent = mail($to, $emailSubject, $body, $headers);

if ($sent) {
    echo json_encode(['success' => true, 'message' => 'Nachricht erfolgreich gesendet.']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es spaeter erneut.']);
}
