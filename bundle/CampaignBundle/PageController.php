<?php

namespace CampaignBundle;

use Core\Controller;
use Lib\Helper;
use Lib\PDO;
use Lib\UserAPI;
use Lib\WechatAPI;

class PageController extends Controller
{

    public function __construct()
    {
        $this->_pdo = PDO::getInstance();
    }

    public function indexAction()
    {
        echo 'kenzo-bdj';exit;
        $config = array();
        return $this->render('index', array('config' => $config));
    }

    // public function loginAction()
    // {
    //     echo 'Initialization ok';
    //     exit;
    // }

    public function clearCookieAction()
    {
      	$request = $this->Request();
	    setcookie('_user', '', time(), '/', $request->getDomain());
	    $this->statusPrint('success');
    }

}
