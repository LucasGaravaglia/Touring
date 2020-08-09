<?php
/* @ rate class */
/* @ initialize class with rate data */

class rate
{
	public $rate_id;
	public $rate_user_id;
	public $rate_spot_id;	
	public $rate_type;
	public $rate_comment;
	public $rate_datetime;
	
	public function __construct($rate_id, $rate_user_id, $rate_spot_id, $rate_type, $rate_comment)
	{
		$this->rate_id = $rate_id;
		$this->rate_user_id = $rate_user_id;
		$this->rate_spot_id = $rate_spot_id;
		$this->rate_type = $rate_type;
		$this->rate_comment = $rate_comment;
		
		/* New */
		if ($this->rate_id === NULL && $this->rate_spot_id === NULL) InsertRate();
		/* Update */
		if ($this->rate_id !== NULL && $this->rate_user_id !== NULL && $this->rate_type !== NULL && $this->rate_comment !== NULL) UpdateRate();
		/* Delete */
		if ($this->rate_id !== NULL && $this->rate_user_id !== NULL && $this->rate_type === NULL && $this->rate_comment === NULL) DeleteRate();
	}
	public function __destruct()
	{
		/* destroy all */
		$this->rate_id;
		$this->rate_user_id;
		$this->rate_spot_id;	
	    $this->rate_type;
		$this->rate_comment;
		$this->rate_datetime;
	}

	/* define rate_id as lastInsertId if inserted successfull */
	public function InsertRate()
	{
		$rate_datetime = date('Y-m-d H:i:s', strtotime(NOW));
		$Database = new Database();
		$dbconnection = $Database->open();
		$insert_rate = $dbconnection->prepare("INSERT INTO tour_spots_rate (rate_user_id, rate_spot_id, rate_type, rate_comment, rate_datetime) VALUES (:rate_user_id, :rate_spot_id, :rate_type, :rate_comment, :rate_datetime)");
		$insert_rate->bindParam(':rate_user_id', $this->rate_user_id, PDO::PARAM_INT);
		$insert_rate->bindParam(':rate_spot_id', $this->rate_spot_id, PDO::PARAM_INT);
		$insert_rate->bindParam(':rate_type', $this->rate_type, PDO::PARAM_INT);		
		$insert_rate->bindParam(':rate_comment', $this->rate_comment);
		$insert_rate->bindParam(':rate_datetime', $rate_datetime);
		if ($insert_rate->execute()) 
		{
			$this->rate_id = $dbconnection->lastInsertId();
			$this->rate_datetime = $rate_datetime;
		}
		$dbconnection = $Database->close();
	}
	
	/* define rate_id as 0 if updated successfull */	
	public function UpdateRate()
	{
		$Database = new Database();
		$dbconnection = $Database->open();
		$update_rate = $dbconnection->prepare("UPDATE tour_spots_rate SET rate_type = :rate_type, rate_comment = :rate_comment WHERE rate_user_id = :rate_user_id AND rate_id = :rate_id");
		$update_rate->bindParam(':rate_type', $this->rate_type, PDO::PARAM_INT);
		$update_rate->bindParam(':rate_comment', $this->rate_comment);		
		$update_rate->bindParam(':rate_user_id', $this->rate_user_id, PDO::PARAM_INT);
		$update_rate->bindParam(':rate_id', $this->rate_id, PDO::PARAM_INT);
		if ($update->execute()) 
			$this->rate_id = 0;
		$dbconnection = $Database->close();
	}	
	
	/* define rate_id as 0 if deleted successfull */
	public function DeleteRate()
	{
		$rate_datetime = date('Y-m-d H:i:s', strtotime(NOW));
		$Database = new Database();
		$dbconnection = $Database->open();
		$delete_rate = $dbconnection->prepare("DELETE FROM tour_spots_rate WHERE rate_id : rate_id");
		$delete_rate->bindParam(':rate_id', $this->rate_id, PDO::PARAM_INT);
		$delete_rate->bindParam(':rate_user_id', $this->rate_user_id, PDO::PARAM_INT);		
		if ($delete_rate->execute())
			$this->rate_id = 0;
		$dbconnection = $Database->close();
	}
	
}
?>