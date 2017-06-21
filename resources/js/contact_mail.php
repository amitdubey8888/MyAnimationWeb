<?php
	
	$name = $_POST['userName'];
	$email = $_POST['userEmail'];
	$phone = $_POST['userPhone'];

    $toEmail = "amitdubey8888@gmail.com, amitdubeycs88@gmail.com";
    
    $subject = "Customer Contact Form Via TejaasLabs.com";

    $message = $_POST['userMessage'];

    $mailHeaders = "From: " . $name . "<". $email .">.\r\n";


    if(mail($toEmail, $subject, $message, $mailHeaders)) {

        print "<p class='success'>Your message has been send successfully!</p>";

    } else {

        print "<p class='Error'>Problem in Sending Mail.</p>";

    }


?>