<?php
/* @ spot class @ */

class spot
{
	public $tour_spot_id;
	public $tour_spot_list;
	public $tour_spot_content;
	public $tour_spot_category;
	
	public function __construct($action, $tour_spot_category, $tour_spot_id)
	{
		$this->tour_spot_id = $tour_spot_id;
		$this->tour_spot_category = $tour_spot_category;
		if ($action === "GetTourSpots") $this->GetTourSpots();
		if ($action === "GetTourSpotContents") $this->GetTourSpotContents();
	}
	public function __destruct()
	{
		/* destroy all */
		$this->tour_spot_id;
		$this->tour_spot_list;
		$this->tour_spot_content;
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
					$tour_spot_id = $get_tour_spots_row["tour_spot_id"];
					$tour_spot_name = $get_tour_spots_row["tour_spot_name"];
					$tour_spot_schedules = $get_tour_spots_row["tour_spot_schedules"];
					$tour_spot_location = $get_tour_spots_row["tour_spot_location"];
					$tour_spot_address = $get_tour_spots_row["tour_spot_address"];
					$tour_spot_city	 = $get_tour_spots_row["tour_spot_city"];
					$tour_spot_description = $get_tour_spots_row["tour_spot_description"];
					$tour_spot_image = $get_tour_spots_row["tour_spot_image"];
					$spots_array_tmp = array(
									"tour_spot_id" => $tour_spot_id,
									"tour_spot_name" => $tour_spot_name,
									"tour_spot_schedules" => $tour_spot_schedules,
									"tour_spot_location" => $tour_spot_location,
									"tour_spot_address" => $tour_spot_address,
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
    public function GetTourSpotContents()
	{
		$Database = new Database();
		$dbconnection = $Database->open();
		$get_tour_spot_content = $dbconnection->prepare('SELECT * FROM tour_spots_content WHERE tour_spot_content_spot_id = :tour_spot_content_spot_id');
		$get_tour_spot_content->bindParam(':tour_spot_content_spot_id', $this->tour_spot_id);
		$spot_content_array = array();
		if ($get_tour_spot_content->execute())
		{
			if ($get_tour_spot_content->rowCount() > 0)
			{
		
				 while ($get_tour_spot_content_row = $get_tour_spot_content->fetch(PDO::FETCH_ASSOC)) 
				{	
					$tour_spot_content_id = $get_tour_spot_content_row["tour_spot_content_id"];
					$tour_spot_content_name = $get_tour_spot_content_row["tour_spot_content_name"];
					$tour_spot_content_type = $get_tour_spot_content_row["tour_spot_content_type"];
					$tour_spot_content_description = $get_tour_spot_content_row["tour_spot_content_description"];
					$tour_spot_content_url = $get_tour_spot_content_row["tour_spot_content_url"];
					$spot_content_array_tmp = array(
									"tour_spot_content_id" => $tour_spot_content_id,
									"tour_spot_content_name" => $tour_spot_content_name,
									"tour_spot_content_type" => $tour_spot_content_type,
									"tour_spot_content_description" => $tour_spot_content_description,
									"tour_spot_content_url" => $tour_spot_content_url
									
									);
					array_push($spot_content_array, $spot_content_array_tmp);
				}
			}
		}
		$this->tour_spot_content = $spot_content_array;
		$dbconnection = $Database->close();
    }	
}
?>