<?php
class Enterprise
{
	private $enterprise_id;
    private $enterprise_firstname;
	private $enterprise_lastname;
	private $enterprise_photo;
	private $enterprise_email;

    public function __construct()
	{

    }
	
    public function __destruct() 
	{

    }
	
	public function insert_enterprise($POST, $FILES)
	{
		$result = 0;
		if (empty($POST) || empty($FILES))
		{
			$result = array("status" => "error", "error_msg" => "incomplete_request");
			return $result;
		}
	}
	
	public function get_enterprise_category_list()
	{
		$Database = new Database();
		$dbconnection = $Database->open();
		$list_enterprises = $dbconnection->prepare("SELECT * FROM enterprise_category_list");
		$list_enterprises ->execute();
		$result = 0;
		if ($list_enterprises ->rowCount() > 0) 						
		{	
			$result = array();
			while ($enterprise_row = $list_enterprises->fetch(PDO::FETCH_ASSOC)) 
			{	
				$result[] = array(
					"enterprise_category_id" => $enterprise_row["enterprise_category_id"],
					"enterprise_category_name" => $enterprise_row["enterprise_category_name"],
					"enterprise_category_unique" => $enterprise_row["enterprise_category_unique"]
					
				);
			}
		}
		$dbconnection = $Database->close();
		return $result;
	}
	
    public function get_enterprisedata() 
	{	
		return array (
			"enterprise_firstname" => $this->enterprise_firstname,
			"enterprise_lastname" => $this->enterprise_lastname,
			"enterprise_photo" => $this->enterprise_photo,
			"enterprise_email" => $this->enterprise_email
		);
	}
	public function get_enterprise_rating(int $enterprise_id)
	{
		$Database = new Database();
		$dbconnection = $Database->open();
		for ($i = 1; $i <= 5; $i++)
		{
			$get_enterprise_rate = null;
			$get_enterprise_rate = $dbconnection->prepare("SELECT COUNT(*) FROM enterprises_rates WHERE rate_enterprise_id = :rate_enterprise_id AND rate = :rate");
			$get_enterprise_rate->bindParam(':rate_enterprise_id', $enterprise_id, PDO::PARAM_INT);
			$get_enterprise_rate->bindParam(':rate', $i, PDO::PARAM_INT);
			$get_enterprise_rate->execute();	
			$rates[$i] = $get_enterprise_rate->fetchColumn();
		}
		$dbconnection = $Database->close();
		$total_rate = (5*$rates[5] + 4*$rates[4] + 3*$rates[3] + 2*$rates[2] + 1*$rates[1]) / ($rates[5] + $rates[4] + $rates[3] + $rates[2] + $rates[1]);
		return $total_rate;
	}
	public function get_enterprises()
	{
		$Database = new Database();
		$dbconnection = $Database->open();
		$list_enterprises = $dbconnection->prepare("SELECT * FROM enterprises");
		$list_enterprises ->execute();			
		if ($list_enterprises ->rowCount() > 0) 						
		{	
			echo '<ul class="enterprises" style=" list-style: none;">';
			while ($enterprise_row = $list_enterprises->fetch(PDO::FETCH_ASSOC)) 
			{	
				$enterprise_id = $enterprise_row["enterprise_id"];
				$enterprise_name = $enterprise_row["enterprise_name"];
				$enterprise_photo = $enterprise_row["enterprise_photo"];
				$enterprise_neighborhood = $enterprise_row["enterprise_neighborhood"];
				$enterprise_address = $enterprise_row["enterprise_address"];
				$enterprise_capacity = $enterprise_row["enterprise_capacity"];
				$enterprise_essences = unserialize($enterprise_row["enterprise_essences"]);
				$enterprise_essences_count = 0;
				foreach ($enterprise_essences as $value) $enterprise_essences_count++;
				echo '<div class="list-enterprise"><li class="list-enterprise-content">';
				echo '<div class="list-enterprise-content-top">';
				echo '<div class="list-enterprise-photo-container"><a href="enterprise?id=' . $enterprise_id . '"><img src="' . $enterprise_photo . '" class="list-enterprise-photo" /></a></div><div class="list-enterprise-name"><a class="enterprise-href" href="enterprise?id=' . $enterprise_id . '">' . $enterprise_name . '</a></div>';
				echo '<div class="list-enterprise-location"><div>' . $enterprise_address . ' - ' . $enterprise_neighborhood . '</div></div>';
				echo '<div class="list-enterprise-rates">';
				$total_rate = round($this->get_enterprise_rating($enterprise_id));
				for ($i = 0; $i < $total_rate; $i++) echo '<i class="enterprise_rate_c"></i>';
				for ($j = 5; $j > $i; $j--) echo '<i class="enterprise_rate_o"></i>';
				echo '</div>'; //listenterpriserates
				echo '</div>'; //listenterprisecontenttop
				echo '<div class="list-enterprise-content-middle">';
				echo '<div class="list-enterprise-details"><div>Sabores disponiveis: ' . $enterprise_essences_count . ' </div><div>Capacidade máxima: ' . $enterprise_capacity . ' Pessoas</div></div>';
				echo '</div>';
				echo '<div class="list-enterprise-content-bottom">';
				echo '<div class="list-enterprise-options"><button class="list-enterprise-request-button">Fazer pedido</button></div>';
				echo '</div>';
				echo '</li></div>';
			}
			echo '</ul>';
		}
		$dbconnection = $Database->close();
	}
}
