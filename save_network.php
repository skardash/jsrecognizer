<?php 
	$dir_path = 'dirtmp';
	if (!file_exists($dir_path)) {
		mkdir($dir_path, 0777, true);
	}
	$file = $dir_path.'/'.$_POST['file_name'];
	//$file = $dir_path.'/'.'network_new.txt';
	file_put_contents($file, $_POST['net']);
?>