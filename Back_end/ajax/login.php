<?php
require_once "../class/config.php";
require_once "../class/functions.php";
$Functions = new Functions();
$Functions->GenerateHeader("json");

$login_method = (isset($_POST['login_method']) && !empty($_POST['login_method'])) ? $_POST['login_method'] : NULL;

if (isset($_POST['email']) && !empty($_POST['email']) && $login_method !== NULL)
{
	if ($login_method !== "facebook" || $login_method !== "google") $Functions->KillPage(array("status" => "error", "error_msg" => "invalid_login_method"));
	$email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
	$pass = filter_input(INPUT_POST, 'pass', FILTER_DEFAULT);
	
    require_once "../class/user.php";
	$user = new user();
	$token = $user->Login($email, $pass, $login_method);
	$user = null;
	
	$Functions->KillPage(array("status" => "success", "token" => $token));
}
else
{
    header("HTTP/1.0 400 Bad Request");
	exit();
}
?>