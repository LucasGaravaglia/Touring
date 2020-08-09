<?php
/* @ user class @ */
/* initialize class with user token */

class user
{
	public $user_id;
	public $user_firstname;
	public $user_lastname;
	public $user_cpf;
	public $user_phone;
	public $user_address;
	public $user_email;
	public $user_image;
	public $user_type;
	public $user_creation_datetime;
	public $user_token;
	public $user_login_method;
	public $user_first_login;
	
	public function __construct($user_token = NULL)
	{
		if ($user_token !== NULL) $this->TokenValidator($user_token);
	}
	public function __destruct()
	{
		/* destroy all */
		$this->user_id;
		$this->user_firstname;
		$this->user_lastname;
		$this->user_cpf;
		$this->user_phone;
		$this->user_address;
		$this->user_email;
		$this->user_image;
		$this->user_type;
		$this->user_creation_datetime;
		$this->user_token;
		$this->user_login_method;		
		$this->user_first_login;
	}
	
    public function Login($user_email, $user_login_method, $user_name, $user_image)
	{
		$this->user_email = $user_email;
		$this->user_login_method = $user_login_method;
		$this->user_firstname = $user_name;
		$this->user_image = $user_image;
		$Database = new Database();
		$dbconnection = $Database->open();
		$user = $dbconnection->prepare('SELECT * FROM user WHERE user_email = :user_email');
		$user->bindParam(':user_email', $user_email, PDO::PARAM_STR);
		if ($user->execute())
		{	
			/* if user exists, then get userdata, else register current user */
			if ($user->rowCount() > 0)
			{
				$userdata = $user->fetch(PDO::FETCH_ASSOC);
				$this->user_id = $userdata["user_id"];
				$this->user_firstname = $userdata["user_firstname"];
				$this->user_lastname = $userdata["user_lastname"];
				$this->user_cpf = $userdata["user_cpf"];
				$this->user_phone = $userdata["user_phone"];
				$this->user_address = $userdata["user_address"];
				$this->user_image = $userdata["user_image"];
				$this->user_type = $userdata["user_type"];
				$this->user_creation_datetime = $userdata["user_creation_datetime"];
				$this->user_first_login = 0;
				$this->GetAccessToken();
			}
			else $this->RegisterUser();		
		}
		$dbconnection = $Database->close();
		return $this->user_token;		
    }

	public function UpdateUserData($new_userdata)
	{
		$Database = new Database();
		$dbconnection = $Database->open();
		$dynamic_query = "UPDATE user SET ";
		if ($this->user_token === "INVALID") return $this->user_token;
		foreach($new_userdata as $key => $value) 
		{
			if ($value !== NULL) $dynamic_query .= $key . " = :" . $key . ", ";
		}
		$dynamic_query = rtrim($dynamic_query, ", ");
		$dynamic_query .= " WHERE user_id = :user_id";
		$update_userdata = $dbconnection->prepare($dynamic_query);
		foreach($new_userdata as $key => &$value) 
		{
			if ($value !== NULL) $update_userdata->bindParam(':' . $key, $value);
		}
		$update_userdata->bindParam(':user_id', $this->user_id);
		$update_userdata->execute();
		$dbconnection = $Database->close();
		return $update_userdata->rowCount();
	}
	
	public function TokenValidator($token)
	{
		$Database = new Database();
		$dbconnection = $Database->open();
		$token_validator = $dbconnection->prepare('SELECT user_login_expires, user_login_user_id FROM user_login_token WHERE user_login_token = :token');
		$token_validator->bindParam(':token', $token, PDO::PARAM_STR);
		if ($token_validator->execute())
		{	
			/* if token exists, define */
			if ($token_validator->rowCount() > 0)
			{			
				$tokendata = $token_validator->fetch(PDO::FETCH_ASSOC);
				$token_expires = $tokendata["user_login_expires"];
				$user_login_user_id = $tokendata["user_login_user_id"];
				if(strtotime($token_expires) >= strtotime(NOW)) 
				{
					$this->user_token = $token;
					$this->user_id = $user_login_user_id;
				}
				else $this->user_token = "INVALID";
			}
			else $this->user_token = "INVALID";
		}
		$dbconnection = $Database->close();
	}

	public function GetAccessToken()
	{
		$ip_address = $_SERVER['REMOTE_ADDR'];
		$token = hash('sha512', md5(uniqid($this->user_id . NOW, true))) . hash('sha512', uniqid($this->user_id . NOW, true)) . hash('sha512', $this->user_id . NOW) . hash('sha512', NOW);
		$user_login_expires = date('Y-m-d H:i:s', strtotime('+365 days', strtotime(NOW)));
		$Database = new Database();
		$dbconnection = $Database->open();		
		$register_token = $dbconnection->prepare("INSERT INTO user_login_token (user_login_method, user_login_user_id, user_login_token, user_login_expires, user_login_token_ip) VALUES (:user_login_method, :user_login_user_id, :user_login_token, :user_login_expires, :user_login_token_ip)");
		$register_token->bindParam(':user_login_method', $this->user_login_method, PDO::PARAM_STR);
		$register_token->bindParam(':user_login_user_id', $this->user_id, PDO::PARAM_INT);
		$register_token->bindParam(':user_login_token', $token, PDO::PARAM_STR);
		$register_token->bindParam(':user_login_expires', $user_login_expires);
		$register_token->bindParam(':user_login_token_ip', $ip_address);
		if ($register_token->execute())	$this->user_token = $token;
		$dbconnection = $Database->close();
	}

	public function RegisterUser()
	{
		$user_creation_datetime = date('Y-m-d H:i:s', strtotime(NOW));
		$Database = new Database();
		$dbconnection = $Database->open();
		$register_user = $dbconnection->prepare("INSERT INTO user (user_firstname, user_email, user_image, user_creation_datetime) VALUES (:user_firstname, :user_email, :user_image, :user_creation_datetime)");
		$register_user->bindParam(':user_creation_datetime', $user_creation_datetime);
		$register_user->bindParam(':user_firstname', $this->user_firstname, PDO::PARAM_STR);
		$register_user->bindParam(':user_email', $this->user_email, PDO::PARAM_STR);
		$register_user->bindParam(':user_image', $this->user_image, PDO::PARAM_STR);
		if ($register_user->execute())
		{
			$this->user_id = $dbconnection->lastInsertId();
            $this->GetAccessToken($this->user_login_method);
			$this->user_first_login = 1;
		}
		$dbconnection = $Database->close();	
	}
	
    public function GetUserData() 
	{
		$Database = new Database();
		$dbconnection = $Database->open();
		$user = $dbconnection->prepare('SELECT * FROM user WHERE user_id = :user_id');
		$user->bindParam(':user_id', $this->user_id, PDO::PARAM_INT);
		if ($user->execute())
		{	
			if ($user->rowCount() > 0)
			{
				$userdata = $user->fetch(PDO::FETCH_ASSOC);
				$this->user_id = $userdata["user_id"];
				$this->user_firstname = $userdata["user_firstname"];
				$this->user_lastname = $userdata["user_lastname"];
				$this->user_cpf = $userdata["user_cpf"];
				$this->user_phone = $userdata["user_phone"];
				$this->user_address = $userdata["user_address"];
				$this->user_email = $userdata["user_email"];
				$this->user_image = $userdata["user_image"];
				$this->user_type = $userdata["user_type"];
				$this->user_creation_datetime = $userdata["user_creation_datetime"];
			}	
		}
		$dbconnection = $Database->close();		
	}
}
?>