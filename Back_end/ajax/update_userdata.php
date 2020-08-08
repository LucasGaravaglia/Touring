<?php
require_once "../class/config.php";
require_once "../class/functions.php";
$Functions = new Functions();
$Functions->GenerateHeader("json");
	
$user_login_token = (isset($_POST['user_login_token']) && !empty($_POST['user_login_token'])) ? $_POST['user_login_token'] : NULL;
$user_firstname = (isset($_POST['user_firstname']) && !empty($_POST['user_firstname'])) ? filter_input(INPUT_POST, 'user_firstname', FILTER_DEFAULT) : NULL;
$user_lastname = (isset($_POST['user_lastname']) && !empty($_POST['user_lastname'])) ? filter_input(INPUT_POST, 'user_lastname', FILTER_DEFAULT) : NULL;
$user_cpf = (isset($_POST['user_cpf']) && !empty($_POST['user_cpf'])) ? filter_input(INPUT_POST, 'user_cpf', FILTER_DEFAULT) : NULL;
$user_phone = (isset($_POST['user_phone']) && !empty($_POST['user_phone'])) ? filter_input(INPUT_POST, 'user_phone', FILTER_DEFAULT) : NULL;
$user_address = (isset($_POST['user_address']) && !empty($_POST['user_address'])) ? filter_input(INPUT_POST, 'user_address', FILTER_DEFAULT) : NULL;
$user_email = (isset($_POST['user_email']) && !empty($_POST['user_email'])) ? filter_input(INPUT_POST, 'user_email', FILTER_SANITIZE_EMAIL) : NULL;

if ($user_firstname === NULL && $user_lastname === NULL && $user_cpf === NULL && $user_phone === NULL && $user_address === NULL && $user_email === NULL || $user_login_token === NULL)
{
	header("HTTP/1.0 400 Bad Request");
	exit();
}
else
{
	if ($user_cpf !== NULL && !$Functions->CpfValidate($user_cpf))
		$Functions->KillPage(array("status" => "error", "error_msg" => "invalid_cpf"));
	
	$new_userdata = array(
					"user_firstname" => $user_firstname,
					"user_lastname" => $user_lastname,
					"user_cpf" => $user_cpf,
					"user_phone" => $user_phone,
					"user_address" => $user_address,
					"user_email" => $user_email
				);

	require_once "../class/user.php";
	$user = new user($user_login_token);
	$update_userdata_response = $user->UpdateUserData($new_userdata);
	$user = null;
	$Functions->KillPage(array("status" => "success", "success_msg" => "userdata_changed_successfully"));
}
?>