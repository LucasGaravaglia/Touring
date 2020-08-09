<?php
//$entityBody = file_get_contents('php://input');
//var_dump($entityBody);

//echo "<br><br>";


var_dump($_POST);
exit;
require_once "../class/config.php";
require_once "../class/functions.php";
$Functions = new Functions();
$Functions->GenerateHeader("json");

$login_method = (isset($_POST['login_method']) && !empty($_POST['login_method'])) ? $_POST['login_method'] : NULL;


if (isset($_POST['email']) && !empty($_POST['email']) && $login_method !== NULL)
{
	if ($login_method != "facebook" || $login_method != "google") $Functions->KillPage(array("status" => "error", "error_msg" => "invalid_login_method"));
	$email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
	$name = (isset($_POST['name']) && !empty($_POST['name'])) ? filter_input(INPUT_POST, 'name', FILTER_DEFAULT) : NULL;
	//$pass = filter_input(INPUT_POST, 'pass', FILTER_DEFAULT);
	
    require_once "../class/user.php";
	$user = new user();
	$token = $user->Login($email, $pass, $login_method, $name);
	$user_first_login = ($user->user_first_login === 1) ? 1 : 0;
	if ($user_first_login === 0)
	{
		$reponse = array(
						"status" => "success", 
						"token" => $token, 
						"user_first_login" => $user_first_login,
						"user_id" => $user->user_id,
						"user_firstname" =>	$user->user_firstname,
						"user_lastname" => $user->user_lastname,
						"user_cpf" => $user->user_cpf,
						"user_phone" => $user->user_phone,
						"user_address" => $user->user_address,
						"user_email" => $user->user_email,
						"user_image" => $user->user_image,
						"user_type" => $user->user_type,
						"user_creation_datetime" => $user->user_creation_datetime
					);
		$user = null;
		$Functions->KillPage($response);		
	}
	else
	{
		$reponse = array(
						"status" => "success", 
						"token" => $token, 
						"user_first_login" => $user_first_login
					);
		$user = null;
		$Functions->KillPage($response);
	}
}
else
{
    header("HTTP/1.0 400 Bad Request");
	exit();
}
?>