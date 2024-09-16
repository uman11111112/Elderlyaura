<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents('php://input'), true);
    $to = $data['email'];
    $subject = 'Booking Request';
    $message = 'You have been booked for volunteering. More details will be shared soon.';
    $headers = 'From: no-reply@elderlyaura.com';

    if (mail($to, $subject, $message, $headers)) {
        echo 'Email sent successfully.';
    } else {
        echo 'Failed to send email.';
    }
}
?>
