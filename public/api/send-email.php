<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit();
}

// Get POST data
$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON data']);
    exit();
}

$name = isset($data['name']) ? htmlspecialchars($data['name']) : '';
$email = isset($data['email']) ? htmlspecialchars($data['email']) : '';
$phone = isset($data['phone']) ? htmlspecialchars($data['phone']) : 'Belirtilmemiş';
$message = isset($data['message']) ? htmlspecialchars($data['message']) : '';

if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(['error' => 'Required fields missing']);
    exit();
}

// Email configuration
$to = 'info@asahairtransplant.com';
$subject = 'Saç Ekimi Konsültasyon Talebi - ' . $name;

// HTML email template
$html_message = '
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Yeni Konsültasyon Talebi</title>
</head>
<body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
    <div style="background-color: #f8f9fa; padding: 30px; border-radius: 10px;">
        <h2 style="color: #059669; border-bottom: 2px solid #059669; padding-bottom: 10px; margin-top: 0;">
            🌟 Yeni Konsültasyon Talebi
        </h2>
        
        <div style="background-color: #f0fdf4; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #065f46; margin-top: 0;">👤 Hasta Bilgileri</h3>
            <p><strong>📝 Ad Soyad:</strong> ' . $name . '</p>
            <p><strong>📧 Email:</strong> ' . $email . '</p>
            <p><strong>📱 Telefon:</strong> ' . $phone . '</p>
        </div>
        
        <div style="background-color: #ecfdf5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #065f46; margin-top: 0;">💬 Mesaj</h3>
            <p style="line-height: 1.6; color: #374151;">' . nl2br($message) . '</p>
        </div>
        
        <div style="background-color: #f9fafb; padding: 15px; border-radius: 8px; margin: 20px 0; text-align: center;">
            <p style="margin: 0; color: #6b7280; font-size: 14px;">
                📅 Gönderim Tarihi: ' . date('d.m.Y H:i:s') . '
            </p>
        </div>
        
        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 12px;">
                Bu mesaj ASA Saç Ekim web sitesi iletişim formundan gönderilmiştir.
            </p>
        </div>
    </div>
</body>
</html>';

// Email headers
$headers = array(
    'MIME-Version: 1.0',
    'Content-type: text/html; charset=UTF-8',
    'From: ASA Saç Ekim <noreply@' . $_SERVER['HTTP_HOST'] . '>',
    'Reply-To: ' . $email,
    'X-Mailer: PHP/' . phpversion()
);

// Send email
$success = mail($to, $subject, $html_message, implode("\r\n", $headers));

if ($success) {
    echo json_encode([
        'success' => true,
        'message' => 'Email sent successfully'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error' => 'Failed to send email'
    ]);
}
?>