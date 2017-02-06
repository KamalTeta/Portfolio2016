(function(){
	window.onload = function(){
		var current = null;
		$.ajax({
			type:'POST',
			url: 'langHandler.php',
			data: 'currentLang='+current,
			success: function(data){
				var json = JSON.parse(data);
				$('#headline').html(json.header);
				$('#subHeader1').html(json.subHeader1);
				$('#subHeader2').html(json.subHeader2);
				$('#subHeader3').html(json.subHeader3);
				$('#subHeader4').html(json.subHeader4);
				$('#txtServiceLabel1').html(json.service1);
				$('#txtServiceLabel2').html(json.service3);
				$('#txtServiceLabel3').html(json.service2);
				$('#eventTitle').html(json.eventTitle[0]);
				$('#eventText').html(json.eventText[0]);

				if(json.sprog === 'dk'){
					document.querySelector('.l1').classList.add('highlighted');
				}else if (json.sprog === 'en'){
					document.querySelector('.l2').classList.add('highlighted');
				}else if (json.sprog === 'no'){
					document.querySelector('.l3').classList.add('highlighted');
				}

				$('.eventLink').on('click', function(){
					var currentEvents = $(this).index();
					$.ajax({
						data: currentEvents,
						success: function(data){
							$('#eventTitle').html(json.eventTitle[currentEvents]);
							$('#eventText').html(json.eventText[currentEvents]);
						}
					});
				});
			}
		});
	};
	
	$('.langOption').on('click', function(){
		var current = $(this).index();
		document.querySelector('.l1').classList.remove('highlighted');
		document.querySelector('.l2').classList.remove('highlighted');
		document.querySelector('.l3').classList.remove('highlighted');
		this.classList.add('highlighted');
		$.ajax({
			type:'POST',
			url: 'langHandler.php',
			data: 'currentLang='+current,
			success: function(data){
				var json = JSON.parse(data);
				$('#headline').html(json.header);
				$('#subHeader1').html(json.subHeader1);
				$('#subHeader2').html(json.subHeader2);
				$('#subHeader3').html(json.subHeader3);
				$('#subHeader4').html(json.subHeader4);
				$('#txtServiceLabel1').html(json.service1);
				$('#txtServiceLabel2').html(json.service3);
				$('#txtServiceLabel3').html(json.service2);
				$('#eventTitle').html(json.eventTitle[0]);
				$('#eventText').html(json.eventText[0]);
				//console.log(json);

				$('.eventLink').on('click', function(){
					var currentEvents = $(this).index();
					$.ajax({
						data: currentEvents,
						success: function(data){
							$('#eventTitle').html(json.eventTitle[currentEvents]);
							$('#eventText').html(json.eventText[currentEvents]);
						}
					});
				});
			}
		});
	});

	
})();