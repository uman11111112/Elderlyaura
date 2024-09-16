<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "umang6c2010@gmail.com"; // Replace with your website's email
    $subject = "Volunteer Request Submitted";
    
    $requester_name = htmlspecialchars($_POST['requester_name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $address = htmlspecialchars($_POST['address']);
    $task_description = htmlspecialchars($_POST['task_description']);
    $preferred_time = htmlspecialchars($_POST['preferred_time']);
    $additional_info = htmlspecialchars($_POST['additional_info']);
    
    $message = "
    A new volunteer request has been submitted:\n\n
    Name: $requester_name\n
    Email: $email\n
    Phone: $phone\n
    Address: $address\n
    Task Description: $task_description\n
    Preferred Date and Time: $preferred_time\n
    Additional Information: $additional_info\n
    ";

    $headers = "From: noreply@elderlyaura.com";

    if (mail($to, $subject, $message, $headers)) {
        echo "Your request has been submitted successfully!";
    } else {
        echo "Error: Unable to send request.";
    }
}
?>
