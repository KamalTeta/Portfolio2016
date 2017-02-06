(function(){
	window.onload = function(){
		var current = null;
		$.ajax({
			type:'POST',
			url: 'php/langHandler.php',
			data: 'currentLang='+current,
			success: function(data){
				var json = JSON.parse(data);
				$('#headline').html(json.h1);
				$('.disclaimer').html(json.disclaimer);
				$('#languagesSection').html(json.languagesSection);
				$('#home1').html('/ '+json.home);
				$('#home2').html('>'+json.home);
				$('#about1').html('/ '+json.about);
				$('#about2').html('>'+json.about);
				$('#about3').html(json.about);
				$('#method1').html('/ '+json.method);
				$('#method2').html('>'+json.method);
				$('#method3').html(json.method);
				$('#portfolio1').html('/ '+json.portfolio);
				$('#portfolio2').html('>'+json.portfolio);
				$('#portfolio3').html(json.portfolio);
				$('#contact1').html('/ '+json.contact);
				$('#contact2').html('>'+json.contact);
				$('#contact3').html(json.contact);
				$('#description').html(json.description);
				$('#portfolioTagline').html(json.portfolioTagline);
				$('#dragToDesc').html(json.dragToDesc);
				$('#contactTagline').html(json.contactTagline);
				$('#contactInfo').html(json.contactInfo);
				$('#metodeTagline').html(json.metodeTagline);
				$('#pro').html(json.pro);
				$('#learn').html(json.learn);
				$('#used').html(json.used);
				document.querySelector('#sendBtn').value = json.sendBtn;
				document.querySelector('#message').placeholder = json.message;
				document.querySelector('#navn').placeholder = json.navn;
				document.querySelector('#afsender').placeholder = json.afsender;
				document.querySelector('#human').placeholder = json.human;
				//console.log(json.header);
				if(json.sprog === 'dk'){
					document.querySelector('.l1').classList.add('chosen');
				}else if (json.sprog === 'en'){
					document.querySelector('.l2').classList.add('chosen');
				}

				function doFirst(){
					var numberForChrome = "";
					$('.divForDrag').on("dragstart", dragStart);
					function dragStart(e){
						var project = this.getAttribute('data-url');
						this.style.opacity = "0"
						e.dataTransfer = e.originalEvent.dataTransfer;
					    e.dataTransfer.setData('Text',project);
					    var img = document.createElement("img");
				    	img.src = "media/png" + project + ".png";
					    e.dataTransfer.setDragImage(img,75,50);
					    numberForChrome = project;
					}

				    var leftbox = document.getElementById('dragTo');
				    var leftbox2 = document.getElementById('iframe');
				    leftbox.addEventListener("dragenter", function (e){e.preventDefault();$('#dragTo').css('border','solid 10px #218c5f');},false);
				    leftbox.addEventListener("dragleave", function (e){e.preventDefault();$('#dragTo').css('border','solid 10px #555');},false);
				    leftbox.addEventListener("dragover", function (e){e.preventDefault();$('#dragTo').css('border','solid 10px #218c5f');} ,false); 
				    document.addEventListener("dragend", droppedOnTheHead, false);
				    leftbox.addEventListener("drop", dropped ,false);


			    	function droppedOnTheHead(e){
						e.preventDefault();//nothing happens auto.
				    	var currentProject = e.dataTransfer.getData('Text');
					    document.querySelector(".divForDrag" + numberForChrome).style.opacity = "1";
					    $('html,body').css('cursor','default');
					}

				    function dropped(e){
					    e.preventDefault();//nothing happens auto.
				    	var currentProject = e.dataTransfer.getData('Text');
					    document.querySelector(".divForDrag" + currentProject).style.opacity = "1";
					    $('html,body').css('cursor','default');
					    $('#dragTo').css('border','solid 10px #555');

					    $.ajax({
							success: function(data){
								leftbox.innerHTML = json.portText[currentProject];
								document.getElementById('iframe').src = json.portLink[currentProject];
							}
						});
					}
				}doFirst();

				$('.divForDrag2').on('click',function doSecond(){
					var leftbox = document.getElementById('dragTo');
					var luckyNumber = $(this).index();
					$.ajax({
						success: function(data){
							leftbox.innerHTML = json.portText[luckyNumber];
							document.getElementById('iframe').src = json.portLink[luckyNumber];
						}
					});
				})
			}
		});
	};
	
	$('.langOption').on('click', function(){
		var current = $(this).index();
		document.querySelector('.l1').classList.remove('chosen');
		document.querySelector('.l2').classList.remove('chosen');
		this.classList.add('chosen');
		console.log(current);
		$.ajax({
			type:'POST',
			url: 'php/langHandler.php',
			data: 'currentLang='+current,
			success: function(data){
				var json = JSON.parse(data);
				$('#headline').html(json.h1);
				$('.disclaimer').html(json.disclaimer);
				$('#languagesSection').html(json.languagesSection);
				$('#home1').html('/ '+json.home);
				$('#home2').html('>'+json.home);
				$('#about1').html('/ '+json.about);
				$('#about2').html('>'+json.about);
				$('#about3').html(json.about);
				$('#method1').html('/ '+json.method);
				$('#method2').html('>'+json.method);
				$('#method3').html(json.method);
				$('#portfolio1').html('/ '+json.portfolio);
				$('#portfolio2').html('>'+json.portfolio);
				$('#portfolio3').html(json.portfolio);
				$('#contact1').html('/ '+json.contact);
				$('#contact2').html('>'+json.contact);
				$('#description').html(json.description);
				$('#portfolioTagline').html(json.portfolioTagline);
				$('#contactTagline').html(json.contactTagline);
				$('#contactInfo').html(json.contactInfo);
				$('#metodeTagline').html(json.metodeTagline);
				$('#pro').html(json.pro);
				$('#learn').html(json.learn);
				$('#used').html(json.used);
				document.querySelector('#sendBtn').value = json.sendBtn;
				document.querySelector('#message').placeholder = json.message;
				document.querySelector('#navn').placeholder = json.navn;
				document.querySelector('#afsender').placeholder = json.afsender;
				document.querySelector('#human').placeholder = json.human;
				document.getElementById('dragTo').innerHTML = json.dragToDesc;
				document.getElementById('iframe').src = 'php/dragFrame.html';

				function doFirst(){
					$('.divForDrag').on("dragstart", function (e){
						var project = this.getAttribute('data-url');
						this.style.opacity = "0"
						e.dataTransfer = e.originalEvent.dataTransfer;
					    e.dataTransfer.setData('Text',project);
					    var img = document.createElement("img");
				    	img.src = "media/png" + project + ".png";
					    e.dataTransfer.setDragImage(img,75,50);
					});

				    var leftbox = document.getElementById('dragTo');
				    var leftbox2 = document.getElementById('iframe');
				    leftbox.addEventListener("dragenter", function (e){e.preventDefault();$('#dragTo').css('border','solid 10px #218c5f');},false);
				    leftbox.addEventListener("dragleave", function (e){e.preventDefault();$('#dragTo').css('border','solid 10px #555');},false);
				    leftbox.addEventListener("dragover", function (e){e.preventDefault();$('#dragTo').css('border','solid 10px #218c5f');} ,false); 

				    leftbox.addEventListener("drop", dropped ,false);
				    document.addEventListener("dragend", 
				    	function(e){
							e.preventDefault();//nothing happens auto.
					    	var currentProject = e.dataTransfer.getData('Text');
						    document.querySelector(".divForDrag" + currentProject).style.opacity = "1";
						    $('html,body').css('cursor','default');
				    }, false)

				    function dropped(e){
					    e.preventDefault();//nothing happens auto.
				    	var currentProject = e.dataTransfer.getData('Text');
					    document.querySelector(".divForDrag" + currentProject).style.opacity = "1";
					    $('html,body').css('cursor','default');
					    $('#dragTo').css('border','solid 10px #555');

					    $.ajax({
							success: function(data){
								leftbox.innerHTML = json.portText[currentProject];
								document.getElementById('iframe').src = json.portLink[currentProject];
							}
						});
					}
				}doFirst();

				$('.divForDrag2').on('click',function doSecond(){
					var luckyNumber = $(this).index();
					$.ajax({
						success: function(data){
							leftbox.innerHTML = json.portText[luckyNumber];
							document.getElementById('iframe').src = json.portLink[luckyNumber];
						}
					});
				})
			}
		});
	});

})();