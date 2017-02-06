<?php
	$urlArray = array(
		'mindSpark' => 'list/Mindspark',
		'mindSparktxt' => '<h3>MindSpark</h3><p>Mindspark siden er et af de første projekter jeg lavede på multimedie design uddannelsen</p><a href="list/Mindspark" target="_blank">Open in new tab</a>',
		'nemad' => 'list/Nemad',
		'nemadtxt' => '<h3>Nemad</h3><p>Lorem ipsum dolor sit amet</p><a href="list/Nemad" target="_blank">Open in new tab</a>',
		'food' => 'http://foodrater.dk',
		'foodtxt' => '<h3>Foodrater</h3><p>Lorem ipsum dolor sit amet</p><a href="http://foodrater.dk" target="_blank">Open in new tab</a>',
		'parking' => 'list/ParkingApp',
		'parkingtxt' => '<h3>Parking app</h3><p>Lorem ipsum dolor sit amet</p><a href="http://foodrater.kamalteta.com" target="_blank">Open in new tab</a>',
		'billboard' => 'http://www.kamalteta.com/billboard',
		'billboardtxt' => '<h3>Parking app</h3><p>Lorem ipsum dolor sit amet</p><a href="http://foodrater.kamalteta.com" target="_blank">Open in new tab</a>',
		'zina' => 'http://www.zina.kamalteta.com/',
		'zinatxt' => '<h3>Parking app</h3><p>Lorem ipsum dolor sit amet</p><a href="http://foodrater.kamalteta.com" target="_blank">Open in new tab</a>'
		  
	);

	$json = json_encode($urlArray, JSON_PRETTY_PRINT);
	echo $json;
?>