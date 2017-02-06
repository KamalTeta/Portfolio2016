(function(){
	"use strict";
	var content = document.querySelector(".content");
	var garageAPI = "./data.json";

	$.getJSON(garageAPI, function(response){
		var records = response.result.records;
		
		function createResults(){
			var string = window.location.search;
			var splitQuery = string.split(/[\?\=\+\&\s]/);
			var garageName = splitQuery[2];
			var garageNumber = splitQuery[3];
			var totalSpaces = records[garageNumber].totalSpaces;
			var vehicleCount = records[garageNumber].vehicleCount;
			var vacantSpaces = totalSpaces-vehicleCount;
			var percent = Math.round(((vehicleCount / totalSpaces) * 100) * 100) / 100;
			document.querySelector(".garageName").innerHTML = garageName;
			if (percent >= 100) {
				document.querySelector(".percentFilled").innerHTML ='Is completely filled.<br/><br/>';
			} else if (percent > 0) {
				document.querySelector(".percentFilled").innerHTML ='Is&ensp;'+percent+'%&ensp;filled.<br/><br/>';
			} else {
				document.querySelector(".percentFilled").innerHTML ='Is empty.<br/><br/>';
			}
			
			var spacesList = document.querySelector(".listOfSpaces");


			for(var i = 1;i<=20;i++){
				var slot = $('<li>').appendTo(spacesList);
				var slotPaint = $('<p>[&ensp;]</p>').appendTo(slot);
				slot.addClass('nega'+i);
				if (i%5==0) {
						var lineBreak = $('<br/>').appendTo(spacesList);
						lineBreak.addClass('breaks'+i);
					}
			}
			
			var number = 1;
			function makeSpaces () {
				if (number <= 20){
					var slot = $('<li>').appendTo(spacesList);
					if (number*5<=percent) {
						var slotPaint = $('<p>[x]</p>').appendTo(slot);
						slot.removeClass('space'+number-1);
						slot.addClass('space'+number);
						slot.addClass('spaceTaken');
					} else {
						var slotPaint = $('<p>[&ensp;]</p>').appendTo(slot);
						slot.addClass('space');
						slot.addClass('espace'+number);
					}
					
					if (number%5==0) {
						var lineBreak = $('<br/>').appendTo(spacesList);
					}
				} else {
					clearTimeout(timer);
				}
				number++;
				var timer = setTimeout(makeSpaces,125);
			}
			makeSpaces();

			
			var negaNumber = 20;
			function negaSpace () {
				if (negaNumber >= 1){
					var negaPSpace = $(document.querySelector('.nega'+negaNumber));
					negaPSpace.addClass('displayNone');
					if (negaNumber%5==0) {
						var negaBreak = $(document.querySelector('.breaks'+negaNumber));
						negaBreak.addClass('displayNone');
					}
				}
				negaNumber--;
				var timer = setTimeout(negaSpace,125);

			}
			negaSpace();


			
			document.querySelector(".jsTxt").innerHTML = '<br/>'+vacantSpaces+' free spaces out of '+totalSpaces+'<br/><br/>Last updated '+records[garageNumber].date;


			console.log(totalSpaces+' Spaces. '+vehicleCount+' Taken. '+vacantSpaces+' Free')
			console.log(percent);
		};createResults();                  
	});
})(jQuery);