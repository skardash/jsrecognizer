<?php 
	$dir_path = 'dirtmp';
	if (!file_exists($dir_path)) {
		mkdir($dir_path, 0777, true);
	}
	$file = $dir_path.'/'.$_POST['file_name'];//'new_data.txt';
	file_put_contents('report.txt', 'attempt_made');
	
	if (file_exists($file)) {
		$current = file_get_contents($file);
	} else {
		$current = '';
	}
	
	//file_put_contents($file, $_POST['imageData']);
	
	
	$data = array_merge((array)$_POST['imageData'], (array)$_POST['label']);
	
	$numElements = count($data);
	for($i = 0; $i < $numElements-1; $i++) { 
		$current .= ((string)($data[$i])).' ';
	}	
	$current .= ((string)($data[$i]))."\n";
	file_put_contents($file, $current);
	
	
	
	
	/*
	$file = $dir_path.'/'.'labels.txt';
	// Open the file to get existing content
	if (file_exists($file)) {
		$current = file_get_contents($file);
	} else {
		$current = '';
	}
	// Append a new person to the file
	$current .= $filename.",".$_POST['label']."\n";
	// Write the contents back to the file
	file_put_contents($file, $current);
	*/
?>