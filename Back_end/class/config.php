<?php
date_default_timezone_set("America/Sao_Paulo");
$now = date("Y-m-d H:i:s");
define("SANDBOX", false); 
define("NOW", $now);
require_once "functions.php";
$Functions = new Functions();

?>