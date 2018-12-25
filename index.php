<?php

if($_POST["submit"]) {
    $recipient="furywrites@gmail.com";
    $subject="Pet portrait inquiry - website contact";
    $sender=$_POST["sender"];
    $senderEmail=$_POST["senderEmail"];
    $message=$_POST["message"];

    $mailBody="Name: $sender\nEmail: $senderEmail\n\n$message";

    mail($recipient, $subject, $mailBody, "From: $sender <$senderEmail>");

    $thankYou="<p>Thank you! Your message has been sent.</p>";
}

?><!DOCTYPE html>

<html>
	<head>
		<title>Custom Pet Portraits</title>
		<link rel="stylesheet" type="text/css" href="css/style.css">

		<script type="text/javascript" src="https://code.jquery.com/jquery-3.3.1.min.js"></script>

		<script type="text/javascript" src="js/custom.js"></script>
	</head>

	<body>
		<div class="container">
			<header class="header text-center">
				<div class="title-section">
					<div class="title">
						<span>Pet Portraits</span>
						<span class="addendum">by Sarah Ann Geren</span>
					</div>
					<div class="subtitle">
						Love is Eternal
					</div>
				</div>

				<nav class="navbar">
					<button id="home" onclick="reformContainer(this.id)" class="lined thin">home</button>
					<button id="gallery" onclick="initiateGallery()" class="lined thin">gallery</button>
					<button id="contact" onclick="reformContainer(this.id)" class="lined thin">contact</button>
					<button id="about" onclick="reformContainer(this.id)" class="lined thin">about</button>
				</nav>
			</header>

			<hr class="hr-short">

			<section id="home-content" class="body-content">
				<div id="slideshow">
					<div class="image-container col-9 align-center">
						<img src="images/portrait_two.png" alt="">
					</div>

					<div class="image-container col-9 align-center">
						<img src="images/portrait_one.png" alt="">
					</div>
				</div>
			</section>

			<section id="contact-content" class="body-content">
				<?=$thankYou ?>

    			<form method="post" action="contact.php">
        			<label>Name:</label>
    		    	<input name="sender">

    		    	<label>Email address:</label>
    		    	<input name="senderEmail">

       		 		<label>Message:</label>
        			<textarea rows="5" cols="20" name="message"></textarea>

        			<input type="submit" name="submit">
    			</form>
			</section>

			<section id="about-content" class="body-content">
				Hi! My name is Annie Geren. I like weenies.
			</section>

			<div class="align-right bottom">
					<img id="signature" src="images/signature.png" alt="All work owned by Sarah Geren.">
			</div>
		</div>

		<footer class="text-center">
			<span>© ALL WORK COPYRIGHT OF SARAH ANN GEREN</span>
		</footer>
	</body>
</html>