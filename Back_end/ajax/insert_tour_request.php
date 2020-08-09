<?php
require_once "../class/config.php";
require_once "../class/functions.php";
$Functions = new Functions();
$Functions->GenerateHeader("json");
	
$user_login_token = (isset($_POST['user_login_token']) && !empty($_POST['user_login_token'])) ? $_POST['user_login_token'] : NULL;
$spots_array = (isset($_POST['spots_array']) && !empty($_POST['spots_array'])) ? $_POST['spots_array'] : NULL;
$restaurants_array = (isset($_POST['restaurants_array']) && !empty($_POST['restaurants_array'])) ? $_POST['restaurants_array'] : NULL;

if ($spots_array === null && $user_login_token === NULL)
{
	header("HTTP/1.0 400 Bad Request");
	exit();
}
else
{
	require_once "../class/user.php";
	$user = new user($user_login_token);
	$user_id = $user->user_id;
	$user = null;
	require_once "../class/tour.php";
	$tour = new tour("InsertTourRequest", $user_id, NULL, $spots_array, $restaurants_array);
	$tour_request_id = $tour->tour_request_id;
	$tour = null;
	if ($tour_request_id === NULL)
		$Functions->KillPage(array("status" => "error", "error_msg" => "insert_tour_failed"));
	else
		$Functions->KillPage(array("status" => "success", "success_msg" => "tour_request_inserted"));
}
?>