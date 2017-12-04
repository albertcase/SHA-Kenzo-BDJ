<?php
define('SITE_URL', dirname(dirname(__FILE__)));
require_once SITE_URL . "/vendor/autoload.php";
require_once SITE_URL . "/config/config.php";

use Lib\Helper;
use Lib\PDO;
use Lib\Redis;

$phone = isset($argv[1]) ? $argv[1] : '';

if(empty($phone)) {
	die('param failed');
}

$redis = new Redis();
$redis->setTimeout('sms:' . $phone, 0);

exit;