(function(){
	"use strict";

	/***************************************
				SCROLLING CODE
	***************************************/
	$("a.jquery").on("click", function(e){
		e.preventDefault();
		var panel = this.getAttribute("href");
		var panelTop = $(panel).offset().top;
		$("html, body").animate({
			scrollTop: panelTop
		}, 2500);
	});

	document.onkeydown = konami;
	console.log('Maybe you should try a cheatcode in the window');

	/***************************************
				ONSCROLL FUNCTIONS (navbar)
	***************************************/
	
		var body = document.body;
		var html = document.documentElement;
		
		var bodyHeight = window.outerHeight;
		var sectionHome = document.querySelector('.sectionHome');
		var sectionHomePos = sectionHome.offsetTop;
		var sectionDescription = document.querySelector('.sectionDescription');
		var sectionDescriptionPos = sectionDescription.offsetTop;
		var sectionMethod = document.querySelector('.sectionMethod');
		var sectionMethodPos = sectionMethod.offsetTop;
		var sectionPortfolio = document.querySelector('.sectionPortfolio');
		var sectionPortfolioPos = sectionPortfolio.offsetTop;
		var sectionContact = document.querySelector('.sectionContact');
		var sectionContactPos = sectionContact.offsetTop;

		var vid = document.getElementById('v0'); 
		
	document.onscroll = function scroller(){
		var currentYPosPx = window.pageYOffset;
			if (currentYPosPx >= 0 && currentYPosPx <= sectionDescriptionPos){
				var firstPercent = (currentYPosPx / sectionDescriptionPos) * 100;
				var reverseFirstPercent = 100 - firstPercent;
				$('#svgHome').attr('x',firstPercent+'%');
				$('#svgAbout').attr('x',0+'%');
				document.querySelector(".profilepic").style.filter = "grayscale("+ reverseFirstPercent +"%)";
				document.querySelector(".bgVid").style.top = currentYPosPx * 0.95 +'px';
				document.querySelector(".bgVid2").style.top = currentYPosPx * 0.3 +'px';
			} else if (currentYPosPx >= sectionDescriptionPos && currentYPosPx <= sectionMethodPos){
				$('#svgHome').attr('x',100+'%');
				$('#svgAbout').attr('x',((currentYPosPx - sectionDescriptionPos)/(sectionMethodPos - sectionDescriptionPos))*100+'%');
				$('#svgMethod').attr('x',0+'%');
				document.querySelector(".methodBg").style.top = -currentYPosPx * 0.25 + 200 +'px';
			} else if (currentYPosPx >= sectionMethodPos && currentYPosPx <= sectionPortfolioPos){
				$('#svgHome').attr('x',100+'%');
				$('#svgAbout').attr('x',100+'%');
				$('#svgMethod').attr('x',((currentYPosPx - sectionMethodPos)/(sectionPortfolioPos - sectionMethodPos))*100+'%');
				$('#svgPortfolio').attr('x',0+'%');
				document.querySelector(".methodBg").style.top = -currentYPosPx * 0.25 + 200 +'px';
			} else if (currentYPosPx >= sectionPortfolioPos && currentYPosPx <= sectionContactPos){
				$('#svgHome').attr('x',100+'%');
				$('#svgAbout').attr('x',100+'%');
				$('#svgMethod').attr('x',100+'%');
				$('#svgPortfolio').attr('x',((currentYPosPx - sectionPortfolioPos)/(sectionContactPos - sectionPortfolioPos))*100+'%');
				$('#svgContact').attr('x',0+'%');
				document.querySelector(".methodBg").style.top = -currentYPosPx * 0.25 + 200 +'px';
			} else if (currentYPosPx >= sectionContactPos){
				$('#svgHome').attr('x',100+'%');
				$('#svgAbout').attr('x',100+'%');
				$('#svgMethod').attr('x',100+'%');
				$('#svgPortfolio').attr('x',100+'%');
				//$('#svgContact').attr('x',((currentYPosPx - sectionPortfolioPos)/sectionContactPos)*100+'%');
			} 	
	}


})(jQuery);