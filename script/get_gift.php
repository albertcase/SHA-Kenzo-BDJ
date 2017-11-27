<?php
define('SITE_URL', dirname(dirname(__FILE__)));
require_once SITE_URL . "/vendor/autoload.php";
require_once SITE_URL . "/config/config.php";

use Lib\Helper;
use Lib\PDO;
use Lib\Redis;

$redis = new Redis();

$pkey = 'quality';

$list = array(
    array('name' => 'gift1', "num" => 10000),
    array('name' => 'gift2', "num" => 10000),
);

foreach($list as $k => $v) {
    $list[$k]['num'] = $redis->hGet('quality', $v['name']) ? $redis->hGet('quality', $v['name']) : 0;
}

var_dump($list);

exit;