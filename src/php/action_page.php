<?php

	$fname = $_POST['fname'];
	$email = $_POST['email'];
	$message = $_POST['message'];
	$document_root = $_SERVER['DOCUMENT_ROOT'];
	$output = $fname. "\t".$email. "\t".$message. "\n";
	$wp = fopen("$document_root/order.txt", 'ab');


	flock($wp, LOCK_EX);
	fwrite($wp, $output);
	fclose($wp);
?>
