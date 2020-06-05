<?php

	$fname = $_POST['fname'];
	$email = $_POST['email'];
	$message = $_POST['message'];
	$document_root = $_SERVER['DOCUMENT_ROOT'];
	$output = $fname. "\t".$email. "\t".$message. "\n";
	$wp = fopen("$document_root/data/order.txt", 'ab'); //before moving on server check directory!!! it may cause problems with writing/reading file


	flock($wp, LOCK_EX);
	fwrite($wp, $output);
    fclose($wp);

    echo "Dziękujęmy za przesłanie zapytania, " .$fname . "<br />";
    echo "Na adres " .$email . " zostało wysłane potwierdzenie. <br />";
    echo "<script src='main.bundle.js'></script>";
?>
