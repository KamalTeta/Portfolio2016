<?php include_once 'header.php'; ?>
<title>Untitled Document</title>
</head>

<body>
<?php include_once 'navigation.php'; ?>
<section class="row">
	<div class="col-xs-12 orange MarginTop">
    	<img src="../media/produkter.png" alt="stack of boxes" class="Right pBox" height="210">
    	<h1>Hvad vi tilbyder</h1>
    	<p>Vores mission er at levere højkvalitets produkter, som både er sunde og billige. Derfor har vi arbejdet hårdt for at finde gode leverandører som kan levere op til den standart vi forventer. Vi mener helt klart at dette skiller os ud fra, andre løsninger der kunne minde om Nemad, da kvaliteten er noget der kan smages! På denne side kan du se de madpakker, som vi udbyder på det danske marked og læse om deres indhold. </p>
    </div>
</section>
<section class="row">
	<div class="col-xs-12 purple MarginTop hoverhand">
    	<h2>Kylling sandwich >></h2>
        <div class="product-info" id="purple-text">
            <img src="../media/nemad-purple.png" class="thingymagic">
            <p class="blabla">
            Til dig som ikke spiser kød har vi lavet en helt speciel pakke. 
            Du får mulighed for at lave din helt egen pitabrød med falafel. 
            Pakken består af et rigtig lækkert pitabrød som du selv fylder 
            med ting fra bakken. I bakken finder ud falafel, frisk salat, 
            løg, ærter, majs, tomater, agurker og en pose med dressing som
            passer lige til pitaen.
            </p>
        </div>
    </div>
    <div class="col-xs-12 orange MarginTop1  hoverhand">
    	<h2>Pizza snacks >></h2>
        <div class="product-info" id="orange-text">
            <img src="../media/nemad-orange.png" class="thingymagic">
            <p class="blabla">
            Til dig som ikke spiser kød har vi lavet en helt speciel pakke. 
            Du får mulighed for at lave din helt egen pitabrød med falafel. 
            Pakken består af et rigtig lækkert pitabrød som du selv fylder 
            med ting fra bakken. I bakken finder ud falafel, frisk salat, 
            løg, ærter, majs, tomater, agurker og en pose med dressing som
            passer lige til pitaen.
            </p>
        </div>
    </div>
    <div class="col-xs-12 blue MarginTop1  hoverhand">
    	<h2>Frikadello >></h2>
        <div class="product-info" id="blue-text">
            <img src="../media/nemad-blue.png" class="thingymagic">
            <p class="blabla">
            Til dig som ikke spiser kød har vi lavet en helt speciel pakke. 
            Du får mulighed for at lave din helt egen pitabrød med falafel. 
            Pakken består af et rigtig lækkert pitabrød som du selv fylder 
            med ting fra bakken. I bakken finder ud falafel, frisk salat, 
            løg, ærter, majs, tomater, agurker og en pose med dressing som
            passer lige til pitaen.
            </p>
        </div>
    </div>
    <div class="col-xs-12 green MarginTop1  hoverhand">
    	<h2>Vegetar pakken >></h2>
        <div class="product-info" id="green-text">
            <img src="../media/nemad-green.png" class="thingymagic">
            <p class="blabla">
            Til dig som ikke spiser kød har vi lavet en helt speciel pakke. 
            Du får mulighed for at lave din helt egen pitabrød med falafel. 
            Pakken består af et rigtig lækkert pitabrød som du selv fylder 
            med ting fra bakken. I bakken finder ud falafel, frisk salat, 
            løg, ærter, majs, tomater, agurker og en pose med dressing som
            passer lige til pitaen.
        </div>
    </div>
</section>
<?php include_once 'footer.php'; ?>
<script>
    $( ".purple" ).click(function() {
      $( "#purple-text" ).slideToggle( "fast" );
    });
    $( ".orange" ).click(function() {
      $( "#orange-text" ).slideToggle( "fast" );
    });
    $( ".blue" ).click(function() {
      $( "#blue-text" ).slideToggle( "fast" );
    });
    $( ".green" ).click(function() {
      $( "#green-text" ).slideToggle( "fast" );
    });
</script>
</body>
</html>