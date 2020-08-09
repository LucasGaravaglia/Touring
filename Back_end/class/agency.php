<?php
/* @ agency class @ */
/* initialize class with user token */

class agency
{
	public $user_id;
	public $agency_user_id;
	public $agency_location;
	public $agency_address;
	public $agency_cnpj;
	public $agency_phone;
	public $agency_email;
	public $agency_description;
	
	public function __construct($action, int $user_id)
	{
		$this->user_id = $user_id;
		if ($action === "InsertAgency") $this->InsertAgency();
	}
	public function __destruct()
	{
		/* destroy all */
		$this->user_id;
	}
	
    public function InsertAgency()
	{
		$agency_creation_datetime = date('Y-m-d H:i:s', strtotime(NOW));
		$Database = new Database();
		$dbconnection = $Database->open();
		$insert_tour_request = $dbconnection->prepare('INSERT INTO tour_requests (agency_user_id, agency_location, agency_address, agency_cnpj, agency_phone, agency_email, agency_description) VALUES (:tour_request_user_id, :tour_request_spots_list, :tour_request_restaurants_list, :tour_request_datetime)');
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