<?php
require_once "database.php";
class Functions
{
	public function KillPage(array $my = array())
	{
		if (empty($my)) exit();
		$arr = array();
    	$arr[] = $my;
    	echo json_encode($arr);
    	exit();			
	}
	public function GenerateHeader($contenttype)
	{
		}
		if($contenttype == "json")
		{	
    		header('Content-Type: application/json; charset=utf-8');
		}
		if($contenttype == "html")
		{	
  	   	    header('Content-Type: text/html; charset=utf-8');
		}
		header("Expires: Tue, 01 Jan 2000 00:00:00 GMT");
		header("Last-Modified: " . gmdate("D, d M Y H:i:s") . " GMT");
		header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
		header("Cache-Control: post-check=0, pre-check=0", false);
		header("Pragma: no-cache");
	}
	public function CpfValidate($cpf = null)
	{
		$cpf = str_pad($cpf, 11, '0', STR_PAD_LEFT);
		if (strlen($cpf) != 11) return false;
	    else if ($cpf == '00000000000' || 
		        $cpf == '11111111111' || 
		        $cpf == '22222222222' || 
		        $cpf == '33333333333' || 
		        $cpf == '44444444444' || 
		        $cpf == '55555555555' || 
		        $cpf == '66666666666' || 
		        $cpf == '77777777777' || 
		        $cpf == '88888888888' || 
		        $cpf == '99999999999')
		    return false;
	    else
		{   		
			for ($t = 9; $t < 11; $t++) 
			{		
				for ($d = 0, $c = 0; $c < $t; $c++) {
					$d += $cpf{$c} * (($t + 1) - $c);
				}
				$d = ((10 * $d) % 11) % 10;
				if ($cpf{$c} != $d) {
					return false;
				}
			}
			return true;
		}		
	}

    public function RetrieveJsonPostData()
    {
        // get the raw POST data
        $rawData = file_get_contents("php://input");

		// encode as utf8 to prevent bugs
		$rawData  = utf8_encode($rawData);
		
        // this returns null if not valid json
        return json_decode($rawData, true);
    }
}

?>