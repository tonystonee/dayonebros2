<?php 
$theme = "basic";
$category = "basic";
$page_title = "Contact";
$page_description =  "Contact Dayonebros.com";
$page_author = "Ant";
$categoryId = "0";
include('includes/header.html');
?>
<div class="page">
<h2>Contact:</h2>
<p>If you have any questions, concerns or any message to give to the creators of dayonebros.com, please submit the 
following form.</p>
<div class="form">
<form action="contact_handle.php" method="post">
	<p><label for="name">Email:</label>
		<input name="email" type="text">
	</p>
	<p><label for="subject">Subject:</label>
		<input name="subject" type="text">
	</p>
	<p><label for="message">Message:</label>
		<textarea name="message" cols="42" rows = "9"></textarea>
	</p>
	<input type="text" name = "shit" style="display:none;">
	<input type="submit" value="send">
	
</form>
</div>
</div>
<?php include 'includes/footer.html';?>