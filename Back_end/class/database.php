<?php
Class Database
{
    public function open() 
	{
		$servername = "localhost";		
        $username = "root";
        $password = "admin";
	    $dbname = "hackatour";
        try
	    {
            $pdo = new PDO("mysql:host=$servername;dbname=$dbname;charset=utf8", $username, $password);
			 $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		    $pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
    	    return $pdo;
        }
        catch(PDOException $e)
        {
			var_dump($e->getMessage());
            return false;
        }
    }
	
    public function close() 
	{
	    $pdo = null;
        return $pdo;
    }
}
?>