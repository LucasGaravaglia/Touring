<?php
require_once "../class/config.php";
require_once "../class/functions.php";
$Functions = new Functions();
$Functions->GenerateHeader("json");

if (isset($_GET['tour_spot_category']) && !empty($_GET['tour_spot_category']))
{
	$tour_spot_category = filter_input(INPUT_GET, 'tour_spot_category', FILTER_DEFAULT);
	if ($tour_spot_category === "tourist_place" || $tour_spot_category === "restaurant")
	{
		require_once "../class/spot.php";
		$spot = new spot("GetTourSpots", $tour_spot_category);
		$response = $spot->tour_spot_list;
		$spot = null;
		$Functions->KillPage($response);
	}
	else
	{
		header("HTTP/1.0 400 Bad Request");
		exit();
	}
}
else
{
    header("HTTP/1.0 400 Bad Request");
	exit();
}
?>