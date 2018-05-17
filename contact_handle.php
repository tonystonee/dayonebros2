<?php
$theme = "basic";
$category = "basic";
$page_title = "Thank You";
$page_description =  "Message Sent.";
$page_author = "Ant";
$categoryId = "0";//music
include('includes/header.html');
?>
<div class="center">
<?php 
$errors = array();

$to = 'dayonebros1@gmail.com';
if (!isset($_POST['shit'])){
	die();
}else{
	error_reporting(0);
	if(!empty($_POST['email'])){
		$email = $_POST['email'];
		
	}else{
		$errors[] = "You need to enter your email";
	}

	if (!empty($_POST['subject'])){
		$subject = $_POST['subject'];
	}else{
		$errors[] = "You need to enter a subject";
	}

	if (!empty($_POST['message'])){
		$message = $_POST['message'];
	}else{
		$errors[] = "You need to enter a message";
	}


	if (empty($errors)){
		echo "<p>Thank You. Your message has been sent.</p>";
		mail($to,$subject,$message);
	}else{
		echo "<p>Sorry. Your message was not sent. The following errors occured:</p>";
		echo "<ul>";
		foreach ($errors as $error){
			echo "<li>$error</li>";
		}
		echo "</ul>";
	}
}




?>
</div>
<?php include 'includes/footer.html';?>