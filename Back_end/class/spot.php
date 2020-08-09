<?php
/* @ spot class @ */

class spot
{
	public $tour_spot_list;
	public $tour_spot_category;
	
	public function __construct($action, $tour_spot_category)
	{
		$this->tour_spot_category = $tour_spot_category;
		if ($action === "GetTourSpots") $this->GetTourSpots();
	}
	public function __destruct()
	{
		/* destroy all */
		$this->tour_spot_list;
		$this->tour_spot_category;
	}
	
    public function GetTourSpots()
	{
		$Database = new Database();
		$dbconnection = $Database->open();
		$get_tour_spots = $dbconnection->prepare('SELECT * FROM tour_spots WHERE tour_spot_category = :tour_spot_category');
		$get_tour_spots->bindParam(':tour_spot_category', $this->tour_spot_category);
		$spots_array = array();
		if ($get_tour_spots->execute())
		{
			if ($get_tour_spots->rowCount() > 0)
			{
				 while ($get_tour_spots_row = $get_tour_spots->fetch(PDO::FETCH_ASSOC)) 
				{	
					$tour_spot_name = $get_tour_spots_row["tour_spot_name"];
					$tour_spot_schedules = $get_tour_spots_row["tour_spot_schedules"];
					$tour_spot_location = $get_tour_spots_row["tour_spot_location"];
					$tour_spot_city	 = $get_tour_spots_row["tour_spot_city"];
					$tour_spot_description = $get_tour_spots_row["tour_spot_description"];
					$tour_spot_image = $get_tour_spots_row["tour_spot_image"];
					$spots_array_tmp = array(
									"tour_spot_name" => $tour_spot_name,
									"tour_spot_schedules" => $tour_spot_schedules,
									"tour_spot_location" => $tour_spot_location,
									"tour_spot_city" => $tour_spot_city,
									"tour_spot_description" => $tour_spot_description,
									"tour_spot_image" => $tour_spot_image
									);
					array_push($spots_array, $spots_array_tmp);
				}
			}
		}
		$this->tour_spot_list = $spots_array;
		$dbconnection = $Database->close();
    }
}
?>