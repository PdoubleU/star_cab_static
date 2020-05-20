<!DOCTYPE html>
<html>
<head>
    <title>Message from visitor</title></title>
</head>
<body>
    <h1>The visitor wrote to you:</h1>
    <h2>Message</h2>
    <?php

	$fname = $_POST['fname'];
	$email = $_POST['email'];
	$message = $_POST['message'];
	$document_root = $_SERVER['DOCUMENT_ROOT'];
	$output = $fname. "\t".$email. "\t".$message. "\n";
	$wp = fopen("$document_root/./order.txt", 'ab');

	if(!$wp) {
		echo "<p><strong>Nie znajduje pliku!</strong></p>";
		exit;
	} else {
		echo "<p><strong>Plik istnieje</strong></p>";
	}
	flock($wp, LOCK_EX);
	fwrite($wp, $output);
	fclose($wp);

	echo
		'<p>Wiadomość wysłana!</p>'
		.date('H:i, jS F'). '<br/>'
		.htmlspecialchars($output). '<br/>'

	?>
</body>
</html>