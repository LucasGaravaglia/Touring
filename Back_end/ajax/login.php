<?php
require_once "../class/config.php";
require_once "../class/functions.php";
$Functions = new Functions();
$Functions->GenerateHeader("json");

$login_method = (isset($_POST['login_method']) && !empty($_POST['login_method'])) ? $_POST['login_method'] : NULL;


if (isset($_POST['email']) && !empty($_POST['email']) && $login_method !== NULL)
{
	if ($login_method === "Facebook" || $login_method === "Google")
	{
		$email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
		$name = (isset($_POST['name']) && !empty($_POST['name'])) ? filter_input(INPUT_POST, 'name', FILTER_DEFAULT) : NULL;
		$user_image = (isset($_POST['user_image']) && !empty($_POST['user_image'])) ? filter_input(INPUT_POST, 'user_image', FILTER_DEFAULT) : NULL;
		//$pass = filter_input(INPUT_POST, 'pass', FILTER_DEFAULT);
	
		require_once "../class/user.php";
		$user = new user();
		$token = $user->Login($email, $login_method, $name, $user_image);
		$user_first_login = ($user->user_first_login === 1) ? 1 : 0;
		if ($user_first_login === 0)
		{
			$response = array(
							"status" => "success", 
							"token" => $token, 
							"user_first_login" => $user_first_login,
							"user_id" => $user->user_id,
							"user_firstname" =>	$user->user_firstname,
							"user_lastname" => $user->user_lastname,
							"user_cpf" => $user->user_cpf,
							"user_phone" => $user->user_phone,
							"user_address" => $user->user_address,
							"user_image" => $user->user_image,
							"user_type" => $user->user_type,
							"user_creation_datetime" => $user->user_creation_datetime
						);
			$user = null;
			$Functions->KillPage($response);		
		}
		else if ($user_first_login === 1)
		{
			$response = array(
							"status" => "success", 
							"token" => $token, 
							"user_first_login" => $user_first_login
						);
			$user = null;
			$Functions->KillPage($response);
		}
		$user = null;
	}
	else $Functions->KillPage(array("status" => "error", "error_msg" => "invalid_login_method"));
}
else if (isset($_POST['token']) && !empty($_POST['token']))
{
	require_once "../class/user.php";
	$user = new user($_POST['token']);
	if ($user->user_token !== "ÌNVALID")
	{
		$user->GetUserData();
		$response = array(
						"status" => "success", 
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
		$response = array(
						"status" => "error", 
						"error_msg" => "invalid_token"
					);
		$user = null;
		$Functions->KillPage($response);		
	}
	$user = null;
}
else
{
    header("HTTP/1.0 400 Bad Request");
	exit();
}
?>