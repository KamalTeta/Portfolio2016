(function(){
	"use strict";
	var content = document.querySelector(".content");
	var garageAPI = "./data.json";

	$.getJSON(garageAPI, function(response){
		var records = response.result.records;
		var dropdownForm = document.querySelector(".dropdownForm");
		var dropdownFormSelect = $('<select name="selectGarage">').appendTo(dropdownForm);

		for(var i=0; i<records.length; i++){
			var record = records[i];
			var dropdownFormOption = $('<option value="'+record.garageCode+' '+i+'">'+record.garageCode+'</option>').appendTo(dropdownFormSelect);
		}
		
		var submitBtn = $('<br/><br/><input type="submit" value="Find spots">').appendTo(dropdownForm);
		submitBtn.addClass('subBtn');             
	});
})(jQuery);