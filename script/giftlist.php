<?php
define('SITE_URL', dirname(dirname(__FILE__)));
require_once SITE_URL . "/vendor/autoload.php";
require_once SITE_URL . "/config/config.php";

use Lib\Helper;
use Lib\PDO;
use Lib\Redis;

$list = array(
    array('name' => 'gift1', "num" => 10000),
    array('name' => 'gift2', "num" => 10000),
);

$giftList = new GiftList($list);
$giftList->createList();

class GiftList
{
    private $helper;
    private $_pdo;
    private $giftList;

    public function __construct($list)
    {
        $this->helper = new Helper();
        $this->giftList = $list;
    }

    public function createList()
    {
      foreach ($this->giftList as $k => $v) {
          $redis = new Redis();
          $redis->hSet('quality', $v['name'], $v['num']);
          $v['created'] = date('Y-m-d H:i:s');
          $id = $this->helper->insertTable('gift_list', $v);
      }
      echo "create gift list ok!\n";
    }
}
