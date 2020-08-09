<?php
require_once "../class/config.php";
require_once "../class/functions.php";
$Functions = new Functions();
$Functions->GenerateHeader("json");

if (isset($_GET['tour_spot_id']) && !empty($_GET['tour_spot_id']))
{
	$tour_spot_id = $_GET["tour_spot_id"];
	require_once "../class/spot.php";
	$spot = new spot("GetTourSpotContents", NULL, $tour_spot_id);
	$response = $spot->tour_spot_content;
	$spot = null;
	$Functions->KillPage($response);
}
else
{
    header("HTTP/1.0 400 Bad Request");
	exit();
}
?>