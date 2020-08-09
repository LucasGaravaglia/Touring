<?php
/* @ tour class @ */
/* initialize class with user token */

class tour
{
	public $user_id;
	public $tour_request_id;
	public $spots_array;
	public $restaurants_array;
	public function __construct($action, int $user_id, $tour_request_id, $spots_array, $restaurants_array)
	{
		$this->user_id = $user_id;
		$this->tour_request_id = $tour_request_id;
		$this->spots_array = $spots_array;
		$this->restaurants_array = $restaurants_array;
		if ($action === "InsertTourRequest") $this->InsertTourRequest();
	}
	public function __destruct()
	{
		/* destroy all */
		$this->user_id;
	}
	
    public function InsertTourRequest()
	{
		$tour_request_spots_list = serialize($this->spots_array);
		$tour_request_restaurants_list = ($this->restaurants_array !== NULL) ? serialize($this->restaurants_array) : 0;
		$tour_request_datetime = date('Y-m-d H:i:s', strtotime(NOW));
		$Database = new Database();
		$dbconnection = $Database->open();
		$insert_tour_request = $dbconnection->prepare('INSERT INTO tour_requests (tour_request_user_id, tour_request_spots_list, tour_request_restaurants_list, tour_request_datetime) VALUES (:tour_request_user_id, :tour_request_spots_list, :tour_request_restaurants_list, :tour_request_datetime)');
		$insert_tour_request->bindParam(':tour_request_user_id', $this->user_id, PDO::PARAM_INT);
		$insert_tour_request->bindParam(':tour_request_spots_list', $tour_request_spots_list);
		$insert_tour_request->bindParam(':tour_request_restaurants_list', $tour_request_restaurants_list);
		$insert_tour_request->bindParam(':tour_request_datetime', $tour_request_datetime);	
		if ($insert_tour_request->execute())
		{
			$this->tour_request_id = $dbconnection->lastInsertId();			
			$dbconnection = $Database->close();
		}
		else $dbconnection = $Database->close();
    }
}
?>