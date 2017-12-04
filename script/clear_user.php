<?php
define('SITE_URL', dirname(dirname(__FILE__)));
require_once SITE_URL . "/vendor/autoload.php";
require_once SITE_URL . "/config/config.php";

use Lib\Helper;
use Lib\PDO;
use Lib\Redis;

$redis = new Redis();

$name = isset($argv[1]) ? $argv[1] : '';
$phone = isset($argv[1]) ? $argv[2] : '';
$type = isset($argv[1]) ? $argv[3] : '';

if(empty($phone) || $phone || $type) {
	die('param failed');
}

$redis = new Redis();
$key = md5($name . $phone . $type);

$redis->setTimeout($key, 0);

exit;