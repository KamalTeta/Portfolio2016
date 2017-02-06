(function(){
	"use strict";

	console.log('*****************************************');
	console.log('* Written by Kamal Teta @ kamalteta.com *');
	console.log('*****************************************');

/* SCROLL TO SECTIONS */
	$("a.jquery").on("click", function(e){
		e.preventDefault();
		var panel = this.getAttribute("href");
		var panelTop = $(panel).offset().top;
		$("html, body").animate({
			scrollTop: panelTop
		}, 1000);
	});

/* THE PARALLAX EFEFCTS */
	function parallax(){
		var hero = document.querySelector('.bgParallax');
		hero.style.top = (window.pageYOffset / 2)+'px';
		var about = document.querySelector('.aboutParallax');
		about.style.left =  -350 + (window.pageYOffset / 8)+'px';
	}
	window.addEventListener("scroll",parallax,false);

/* BURGER ICON */
var burger = document.querySelector(".burger");

	burger.onclick = function(){
		var smallMenu = document.querySelector(".smallMenu");
		smallMenu.classList.toggle("outside");

		smallMenu.onclick = function(){
			smallMenu.classList.toggle("outside");
		}
	}

/* SERVICES */

	$('.blob').on("click", function(){
		var current = $(this).index();
		$('.blob').animate({
			opacity: 0,
		}, 250,'linear' ).eq(current).animate({
			opacity: 1,
		}, 250,'linear' );	
		$('.blob').animate({
			width: '0',
			height:'0'
		}, 1,'linear' ).eq(current).animate({
			width: '33%',
			height:'100%'
		}, 1,'linear' );	
		$('.blobTxt').eq(current).animate({
			'right':'50px',
			opacity:1
		},400,'linear');

			$('.fa-times').on("click", function(){
				$('.blob').animate({
					opacity: 1
				},1,'linear');
				$('.blob').animate({
					height: '100%',
					width: '33%'
				}, 1,'linear');
				$('.blobTxt').eq(current).animate({
					'right':'-100%',
					opacity:0
				},1,'linear');
			});


	});

	/* SERVICES */

	$('.blob2').on("click", function(){
		var current = $(this).index();
		$('.blob2').animate({
			opacity: 0,
		}, 250,'linear' );	
		$('.blob2').animate({
			width: '0',
			height:'0'
		}, 1,'linear' );	
		$('.blobTxt2').eq(current).animate({
			'right':'20px',
			opacity:1
		},400,'linear');

			$('.fa2').on("click", function(){
				$('.blob2').animate({
					opacity: 1
				},1,'linear');
				$('.blob2').animate({
					height: '100%',
					width: '100%'
				}, 1,'linear');
				$('.blobTxt2').eq(current).animate({
					'right':'-100%',
					opacity:0
				},1,'linear');
			});


	});

	/* FOR THE REFERENCES */

	$('.refBoxes').on("click", function(){
		var currentImg = this.childNodes[1];
		var currentTxt = this.childNodes[3];
		currentImg.classList.toggle("usynlig");
		currentTxt.classList.toggle("usynlig");
		//console.log(currentTxt);
	});

})(jQuery);