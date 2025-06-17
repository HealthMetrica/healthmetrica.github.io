<?php
// Initialize response array
$response = [
    'success' => false,
    'message' => ''
];

// Check if the request is a POST request
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Collect and sanitize form data
    $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $subject = filter_input(INPUT_POST, 'subject', FILTER_SANITIZE_STRING);
    $message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING);
    
    // Validate required fields
    if (empty($name) || empty($email) || empty($subject) || empty($message)) {
        $response['message'] = 'Tous les champs sont obligatoires.';
        echo json_encode($response);
        exit;
    }
    
    // Validate email format
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $response['message'] = 'Veuillez fournir une adresse email valide.';
        echo json_encode($response);
        exit;
    }
    
    // Email recipient (replace with your actual email)
    $to = 'healthMetrica@gmail.com';
    
    // Format the message body
    $email_body = "Nouveau message de: $name\n";
    $email_body .= "Email: $email\n";
    $email_body .= "Sujet: $subject\n\n";
    $email_body .= "Message:\n$message";
    
    // Email headers
    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();
    
    // Attempt to send the email
    if (mail($to, "Formulaire de contact: $subject", $email_body, $headers)) {
        // Email sent successfully
        $response['success'] = true;
        $response['message'] = 'Votre message a été envoyé avec succès.';
        
        // Optional: Log the message in a database or file
        // logMessage($name, $email, $subject, $message);
    } else {
        // Email failed to send
        $response['message'] = 'Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer plus tard.';
    }
} else {
    // Not a POST request
    $response['message'] = 'Méthode de requête non valide.';
}

// Return JSON response
header('Content-Type: application/json');
echo json_encode($response);

/**
 * Optional function to log messages in a database
 * Uncomment and implement if needed
 */
/*
function logMessage($name, $email, $subject, $message) {
    // Database connection details
    $host = 'localhost';
    $dbname = 'healthmetrica';
    $username = 'dbuser';
    $password = 'dbpassword';
    
    try {
        $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        
        $stmt = $pdo->prepare("INSERT INTO contact_messages (name, email, subject, message, submitted_at) VALUES (?, ?, ?, ?, NOW())");
        $stmt->execute([$name, $email, $subject, $message]);
    } catch (PDOException $e) {
        // Log error but don't inform user to avoid exposing database issues
        error_log("Database Error: " . $e->getMessage());
    }
}
*/
?>