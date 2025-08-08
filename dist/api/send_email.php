<?php
// send_email.php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

// Function to sanitize input data
function sanitize_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

// Check if the request method is POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the raw POST data
    $json_data = file_get_contents("php://input");
    $data = json_decode($json_data, true);

    // Validate and sanitize input
    $fullName = isset($data["fullName"]) ? sanitize_input($data["fullName"]) : "";
    $email = isset($data["email"]) ? sanitize_input($data["email"]) : "";
    $phone = isset($data["phone"]) ? sanitize_input($data["phone"]) : "Not provided";
    $subject = isset($data["subject"]) ? sanitize_input($data["subject"]) : "";
    $message = isset($data["message"]) ? sanitize_input($data["message"]) : "";

    // Basic validation
    if (empty($fullName) || empty($email) || empty($subject) || empty($message)) {
        http_response_code(400);
        echo json_encode(["success" => false, "error" => "Please fill all required fields."]);
        exit();
    }

    // Recipient email address
    $to = "info@lignelhealthcareltd.com";

    // Email subject
    $email_subject = "Contact Form Submission: " . $subject;

    // Email body
    $email_body = "\nNew contact form submission from Lignel Healthcare website:\n\n"
        . "Name: " . $fullName . "\n"
        . "Email: " . $email . "\n"
        . "Phone: " . $phone . "\n"
        . "Subject: " . $subject . "\n\n"
        . "Message:\n" . $message . "\n\n"
        . "Submitted at: " . date("Y-m-d H:i:s") . "\n";

    // Headers
    $headers = "From: " . $fullName . " <" . $email . ">\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/plain; charset=utf-8\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    // Send email
    $mail_sent = mail($to, $email_subject, $email_body, $headers);

    if ($mail_sent) {
        http_response_code(200);
        echo json_encode(["success" => true, "message" => "Thank you! Your message has been sent successfully. We\'ll get back to you soon."]);
    } else {
        http_response_code(500);
        echo json_encode(["success" => false, "error" => "Failed to send email. Please try again later."]);
    }
} else {
    http_response_code(405);
    echo json_encode(["success" => false, "error" => "Invalid request method."]);
}
?>

