<?php
/* @ restaurant class @ */
/* initialize class with user token */

class restaurant
{
	public $restaurant_id;
	public $restaurant_name;
	public $restaurant_location;
	public $restaurant_address;
	public $restaurant_description;		
	public $restaurant_phone;
	public $restaurant_image;
	
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
	
    public function InsertRestaurant()
	{
		$Database = new Database();
		$dbconnection = $Database->open();
		$insert_restaurant = $dbconnection->prepare('INSERT INTO restaurant (restaurant_name, restaurant_location, restaurant_address, restaurant_description, restaurant_phone, restaurant_image) VALUES (:restaurant_name, :restaurant_location, :restaurant_address, :restaurant_description, :restaurant_phone, :restaurant_image)');
		$insert_restaurant->bindParam(':restaurant_name', $this->restaurant_name);
		$insert_restaurant->bindParam(':restaurant_location', $this->restaurant_location);
		$insert_restaurant->bindParam(':restaurant_address', $this->restaurant_address);
		$insert_restaurant->bindParam(':restaurant_description', $this->restaurant_description);
		$insert_restaurant->bindParam(':restaurant_phone', $this->restaurant_phone);		
		if ($insert_restaurant->execute())
		{
			$this->tour_request_id = $dbconnection->lastInsertId();			
			$dbconnection = $Database->close();
		}
		else $dbconnection = $Database->close();
    }
}
?>