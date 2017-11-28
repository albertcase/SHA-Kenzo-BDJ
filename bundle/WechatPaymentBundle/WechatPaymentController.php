<?php

namespace WechatPaymentBundle;

use Core\Controller;
use Wechat\Payment\Payment;
use Wechat\Payment\Order;

class WechatPaymentController extends Controller
{

	public function testAction()
	{
		$option = [
			'app_id'			 => '3243234234afsf234',
	        'mch_id'        => 'your-mch-id',
	        'key'                => 'key-for-signature',
	        'ssl_cert_path'      => 'path/to/your/cert.pem', // XXX: 绝对路径！！！！
	        'ssl_key_path'       => 'path/to/your/key',      // XXX: 绝对路径！！！！
	        'notify_url'         => '默认的订单回调地址',       // 你也可以在下单时单独设置来想覆盖它
	        'device_info'        => '013467007045764',
	        'fee_type'			 => 'CNY',
	        'device_info'		 => 'WECHAT',
    	];
		$wechatPayment = new Payment($option);

		$attributes = [
		    'trade_type'       => 'JSAPI', // JSAPI，NATIVE，APP...
		    'body'             => 'iPad mini 16G 白色',
		    'detail'           => 'iPad mini 16G 白色',
		    'out_trade_no'     => '1217752501201407033233368018',
		    'total_fee'        => 5388, // 单位：分
		    'notify_url'       => 'http://xxx.com/order-notify', // 
		    'openid'           => '当前用户的 openid', // trade_type=JSAPI，此参数必传，用户在商户appid下的唯一标识，
		    'attach'		   => 'asfddfas',
			'fee_type' 	   	   => '34',
        	'spbill_create_ip' => 'saf',
        	'time_start'       => '123214214',
        	'time_expire'	   => '234',
        	'goods_tag'		   => 'xfxc',
        	'product_id'	   => '342343434',
        	'limit_pay'		   => '343434',
        	'sub_openid'	   => '343434',
        	'auth_code'		   => '343434',
		];
		$order = new Order($attributes);
		$wechatPayment->pay($order);
exit;
	}

}