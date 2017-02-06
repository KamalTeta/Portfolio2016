<?php

	include_once 'languages.php';

	//Here I handle the information sent from AJAX
	
	if($_POST['currentLang'] == 0){
		$json = json_encode($dkArray, JSON_PRETTY_PRINT);
		echo $json;
	}else if ($_POST['currentLang'] == 1) {
		$json = json_encode($enArray, JSON_PRETTY_PRINT);
		echo $json;
	}else if ($_POST['currentLang'] == 2) {
		$json = json_encode($noArray, JSON_PRETTY_PRINT);
		echo $json;
	}else{
		$json = json_encode($dkArray, JSON_PRETTY_PRINT);
		echo $json;
	}

	
?> 