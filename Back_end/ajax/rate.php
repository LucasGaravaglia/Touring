<?php
require_once "../class/config.php";
require_once "../class/functions.php";
$Functions = new Functions();
$Functions->GenerateHeader("json");
	
$user_login_token = (isset($_POST['token']) && !empty($_POST['token'])) ? $_POST['token'] : NULL;
$rate_id = (isset($_POST['rate_id']) && !empty($_POST['rate_id'])) ? filter_input(INPUT_POST, 'rate_id', FILTER_DEFAULT) : NULL;
$rate_spot_id = (isset($_POST['rate_spot_id']) && !empty($_POST['rate_spot_id'])) ? filter_input(INPUT_POST, 'rate_spot_id', FILTER_DEFAULT) : NULL;
$rate_type = (isset($_POST['rate_type']) && !empty($_POST['rate_type'])) ? filter_input(INPUT_POST, 'rate_type', FILTER_DEFAULT) : NULL;
$rate_comment = (isset($_POST['rate_comment']) && !empty($_POST['rate_comment'])) ? filter_input(INPUT_POST, 'rate_comment', FILTER_DEFAULT) : NULL;

if ($user_login_token === NULL)
{
	header("HTTP/1.0 400 Bad Request");
	exit();
}
else
{
	require_once "../class/user.php";
	$user = new user($user_login_token);
	if ($user->user_token === "INVALID")
	{
		$response = array(
						"status" => "error", 
						"error_msg" => "invalid_token_access"
					);
		$user = null;
		$Functions->KillPage($response);
	}
	else
	{
		require_once "../class/rate.php";
		$rate_user_id = $user->user_id;
		$user = null;
		
		$rate = new rate($rate_id, $rate_user_id, $rate_spot_id, $rate_type, $rate_comment);
		
		/* Insert */
		if ($rate_id === NULL && $rate_spot_id === NULL)
		{
			if ($rate->rate_id !== NULL)
				$response = array("status" => "success", "success_msg" => "rate_inserted_successfull", "rate_id" => $rate->rate_id);
			else $response = array("status" => "error", "error_msg" => "failed_on_insert_rate");
		}
		/* Update */
		if ($rate_id !== NULL && $rate_user_id !== NULL && $rate_type !== NULL && $rate_comment !== NULL) 
		{
			if ($rate->rate_id === 0)
				$response = array("status" => "success", "success_msg" => "rate_updated_successfull");
			else $response = array("status" => "error", "error_msg" => "failed_on_update_rate");
		}			
		/* Delete */
		if ($rate_id !== NULL && $rate_user_id !== NULL && $rate_type === NULL && $rate_comment === NULL) DeleteRate();
		{
			if ($rate->rate_id === 0)
				$response = array("status" => "success", "success_msg" => "rate_deleted_successfull");
			else $response = array("status" => "error", "error_msg" => "failed_on_delete_rate");
		}		
		$rate = null;
		$Functions->KillPage($response);
	}
}
?>