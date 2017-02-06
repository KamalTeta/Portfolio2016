<section id="contact" class="sectionContact">
	<div class="contactBg"></div>
	<div id="contactCont">
		<h2 id="contact3"></h2>
		<p class="tagline"><i id ="contactTagline"></i></p>
		<div class="contactDividersl">
			<p id="contactInfo"></p>
			<p>Kamal Lamine Teta</p>
			<a href="https://www.linkedin.com/in/kamal-teta">Linkedin</a><br/>
			<a href="mailto:mail@kamalteta.com">mail@kamalteta.com</a>
			<p>+45 42 48 99 01</p>
		</div>
		
		<?php
				//Checking for header injections
				function has_header_injection($str){
					return preg_match("/[\r\n]/",$str);
				}
					if (isset ($_POST['submit'])){
						$name = trim($_POST['navn']);
						$afsender = trim($_POST['afsender']);
						$msg = $_POST['message'];
						$humancheck = $_POST['human'];

						// Check to see if $name or $afsender have header injections
						if (has_header_injection($name) || has_header_injection($afsender)){
							die();
						}
						//Check all is filled
						if(!$name || !$afsender || !$msg || $humancheck != 'Human'){
							echo '<script>alert("Udfyld venligst alle felterne og prøv igen!");</script>';
						}else{
							echo '<script>alert("Tak for din besked!");</script>';
						}

						//Add the recipient email to a var
						$to = "mail@kamalteta.com";
						//Create a subject
						$subject = "$name via portfolio";
						//Construct message
						$message = "$msg\r\n";
						$message .= "-$name $afsender\r\n";

						$message = wordwrap($message, 72);

						// Set the mail headers into a var
						$headers  = "MIME-Version: 1.0\r\n";
						$headers .= "Content-type: text/plain; charset=iso-8859-1\r\n";
						$headers .= "From: $name <mail@kamalteta.com> \r\n";
						$headers .= "X-Priority: 1\r\n";
						$headers .= "X-MSMail-Priority: High\r\n\r\n";

						//Send the email
						mail($to, $subject, $message, $headers);

					
				?>
				<div class="contactDividersr">
					<form method="post" action="" id="contact-form">
						<input type="text" name="navn" id="navn" class="input"></input>
						<input type="text" name="afsender" id="afsender" class="input"></input>
						<textarea rows="5" name="message" id="message" submit="message" class="input"></textarea><br/>
						<input type="text" name="human" id="human" class="input"></input><br/>
						<input type="submit" name="submit" id="sendBtn">
					</form>
				</div>
			<?php } else { ?>
				<div class="contactDividersr">
					<form method="post" action="" id="contact-form">
						<input type="text" name="navn" id="navn" class="input"></input>
						<input type="text" name="afsender" id="afsender" class="input"></input>
						<textarea rows="5" name="message" id="message" submit="message" class="input"></textarea><br/>
						<input type="text" name="human" id="human" class="input"></input><br/>
						<input type="submit" name="submit" id="sendBtn">
					</form>
				</div>
			<?php } ?>
	</div>
</section>