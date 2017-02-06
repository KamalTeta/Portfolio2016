<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Kamal Teta Portfolio</title>
<link rel="stylesheet" href="css/style.css">
<meta name="keywords" content="webdev, webdevelopment, webudvikler, multimedia, multimedie, Aarhus, Århus, Kamal Teta, Kamal Lamine Teta, Kamal, intern, internship, praktik, praktikant, portfolio, portefølje">
</head>

<body>
	<nav>
		<a href="#home" class="jquery">
			<svg id="swagHome">
			  <defs>
			  	<mask id="svgHome">
			  	  <rect width="100%" height="100%" x="0%" y="0" fill="#fff"/>
			  	</mask>
			  </defs>
			  <rect width="100%" height="100%" fill="#218c5f"/>
			  <g fill="#e9e1d1" font-size="30">
				  <text text-anchor="middle" dominant-baseline="central" x="50%" y="50%" id="home1"></text>
			  </g>
			  <g mask="url(#svgHome)">
					<rect width="100%" height="100%" fill="#e9e1d1"/>
					<g fill="#444" font-size="30">
						<text text-anchor="middle" dominant-baseline="central" x="50%" y="50%" id="home2"></text>
					</g>
			  </g>	
			</svg>
		</a>
		<a href="#about" class="jquery">
			<svg id="swagAbout">
			  <defs>
			  	<mask id="svgAbout">
			  	  <rect width="100%" height="100%" x="0%" y="0" fill="#fff"/>
			  	</mask>
			  </defs>
			  <rect width="100%" height="100%" fill="#218c5f"/>
			  <g fill="#e9e1d1" font-size="30">
				  <text text-anchor="middle" dominant-baseline="central" x="50%" y="50%" id="about1"></text>
			  </g>
			  <g mask="url(#svgAbout)">
					<rect width="100%" height="100%" fill="#e9e1d1"/>
					<g fill="#444" font-size="30">
						<text text-anchor="middle" dominant-baseline="central" x="50%" y="50%" id="about2"></text>
					</g>
			  </g>	
			</svg>
		</a>
		<a href="#method" class="jquery">
			<svg id="swagMethod">
			  <defs>
			  	<mask id="svgMethod">
			  	  <rect width="100%" height="100%" x="0%" y="0" fill="#fff"/>
			  	</mask>
			  </defs>
			  <rect width="100%" height="100%" fill="#218c5f"/>
			  <g fill="#e9e1d1" font-size="30">
				  <text text-anchor="middle" dominant-baseline="central" x="50%" y="50%" id="method1"></text>
			  </g>
			  <g mask="url(#svgMethod)">
					<rect width="100%" height="100%" fill="#e9e1d1"/>
					<g fill="#444" font-size="30">
						<text text-anchor="middle" dominant-baseline="central" x="50%" y="50%" id="method2"></text>
					</g>
			  </g>	
			</svg>
		</a>
		<a href="#portfolio" class="jquery">
			<svg id="swagPortfolio">
			  <defs>
			  	<mask id="svgPortfolio">
			  	  <rect width="100%" height="100%" x="0%" y="0" fill="#fff"/>
			  	</mask>
			  </defs>
			  <rect width="100%" height="100%" fill="#218c5f"/>
			  <g fill="#e9e1d1" font-size="30">
				  <text text-anchor="middle" dominant-baseline="central" x="50%" y="50%" id="portfolio1"></text>
			  </g>
			  <g mask="url(#svgPortfolio)">
					<rect width="100%" height="100%" fill="#e9e1d1"/>
					<g fill="#444" font-size="30">
						<text text-anchor="middle" dominant-baseline="central" x="50%" y="50%" id="portfolio2"></text>
					</g>
			  </g>	
			</svg>
		</a>
		<a href="#contact" class="jquery">
			<svg id="swagContact">
			  <defs>
			  	<mask id="svgContact">
			  	  <rect width="100%" height="100%" x="0%" y="0" fill="#fff"/>
			  	</mask>
			  </defs>
			  <rect width="100%" height="100%" fill="#218c5f"/>
			  <g fill="#e9e1d1">
				  <text text-anchor="middle" dominant-baseline="central" x="50%" y="50%" id="contact1"></text>
			  </g>
			  <g mask="url(#svgContact)">
					<rect width="100%" height="100%" fill="#e9e1d1"/>
					<g fill="#444">
						<text text-anchor="middle" dominant-baseline="central" x="50%" y="50%" id="contact2"></text>
					</g>
			  </g>	
			</svg>
		</a>
	</nav>

	<?php
		include_once 'php/vid.html';
		include_once 'php/description.php';
		include_once 'php/method.php';
		include_once 'php/portfolio.php';
		include_once 'php/contact.php';
	?>

	
	<footer>
		<p class="disclaimer footerThing"></p>
		<p class="footerThing ft2"><span id="languagesSection"></span> <span class='langOption l1'></span> / <span class='langOption l2'></span></p>
	</footer>

	<script src="js/konami.js"></script>
	<script src="js/adventure.js"></script>
	<script src="js/jquery.min.js"></script>
	<script src="js/ajaxLang.js"></script>
	<script src="js/script.js"></script>

</body>
</html>