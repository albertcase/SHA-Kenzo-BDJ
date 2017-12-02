<?php
define('SITE_URL', dirname(dirname(__FILE__)));
require_once SITE_URL . "/vendor/autoload.php";
require_once SITE_URL . "/config/config.php";

use Lib\Redis;

$phone = $argv[1];

$redis = new Redis();
var_dump($redis->get(md5('sms:' . $phone)));

exit;