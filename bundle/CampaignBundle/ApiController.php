<?php

namespace CampaignBundle;

use Core\Controller;
use Lib\Helper;
use Lib\PDO;
use Lib\UserAPI;
use Lib\WechatAPI;
use Lib\Redis;
use Lib\Captcher;

class ApiController extends Controller
{
    private $helper;
    private $_pdo;

    public function __construct() 
    {

   	    global $user;

        parent::__construct();

        // if(!$user->uid) {
        //     $this->statusPrint('100', 'access deny!');
        // }
        $this->_pdo = PDO::getInstance();
        $this->helper = new Helper();
    }

    /**
     * 发送短信验证码
     */
    public function phoneCodeAction()
    {
        $request = $this->request;
        $fields = array(
          'phone' => array('cellphone', '121'),
        );
        $request->validation($fields);

        $ch = curl_init();
        $apikey = "b42c77ce5a2296dcc0199552012a4bd9";
        $mobile = $request->request->get('phone');
        $code = rand(1000, 9999);
        $RedisAPI = new Redis();
        $RedisAPI->setPhoneCode($mobile, $code, 60);
        $text = "【Kenzo凯卓】您的验证码是{$code}";
        $data = array(
        	'text' => $text,
        	'apikey' => $apikey,
        	'mobile' => $mobile
    	);
        curl_setopt ($ch, CURLOPT_URL, 'https://sms.yunpian.com/v2/sms/single_send.json');
        curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
        curl_setopt($ch, CURLOPT_RETURNTRANSFER,true);
        $json_data = curl_exec($ch);
        $array = json_decode($json_data, true);
        $data = array('status' => 1, 'msg' => '发送成功！');
        $this->dataPrint($data);
    }

    /**
     * 验证短信验证码
     */
    public function checkPhoneCodeAction()
    {
        $request = $this->request;
        $fields = array(
            'phone' => array('cellphone', '121'),
            'phonecode' => array('notnull', '120'),
        );
        $request->validation($fields);
        $phone = $request->request->get('phone');
        $phoneCode = $request->request->get('phonecode');
        if($this->checkMsgCode($phone, $phoneCode)) {
            $data = array('status' => 1, 'msg' => 'success');
        } else {
            $data = array('status' => 0, 'msg' => 'phone code is failed');
        }
        $this->dataPrint($data);
    }

    /**
     *  判断手机验证码是否正确
     */
    private function checkMsgCode($mobile, $msgCode) 
    {
        $RedisAPI = new Redis();
        $code = $RedisAPI->get($mobile);
        if($code == $msgCode) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * 验证验证码是否正确
     * 一次就失效
     */
    public function checkPictureAction()
    {
        $request = $this->request;
        $fields = array(
            'picture' => array('notnull', '120'),
        );
        $request->validation($fields);
        $picture = $request->request->get('picture');
        if(strtolower($picture) == strtolower($_SESSION['captcha-protection'])) {
            $data = array('status' => 1, 'msg' => '验证码正确！');
        } else {
            $data = array('status' => 0, 'msg' => '验证码错误！');
        }
        unset($_SESSION['captcha-protection']);
        $this->dataPrint($data);
    }

    /**
     * 获取图片验证码
     */
    public function pictureCodeAction()
    {
        $captcha = new Captcher(150, 65);
        $captchaImage = $captcha->generate();
        $captchaText = $captcha->getCaptchaText();
        $_SESSION['captcha-protection'] = $captchaText;
        if($_SESSION['captcha-protection']) {
            $picture = base64_encode($captchaImage);
            $data = array('status' => 1, 'msg' => "获取成功！", 'picture' => $picture);
        } else {
            $data = array('status' => 0, 'msg' => "获取失败！");
        }
        $this->dataPrint($data);
    }

    /**
     * 提交信息
     */
    public function submitAction()
    {
        $request = $this->request;
        $fields = array(
            'name' => array('notnull', '120'),
            'phone' => array('cellphone', '121'),
            'phonecode' => array('notnull', '120'),
            'province' => array('notnull', '120'),
            'city' => array('notnull', '120'),
            'area' => array('notnull', '120'),
            'address' => array('notnull', '120'),
            'type' => array('notnull', '120'),
        );
        $request->validation($fields);
        $name = $request->request->get('name');
        $phone = $request->request->get('phone');
        $phonecode = $request->request->get('phonecode');
        $province = $request->request->get('province');
        $city = $request->request->get('city');
        $area = $request->request->get('area');
        $address = $request->request->get('address');
        $type = $request->request->get('type');

        $submit = new \stdClass();
        $submit->name = $name;
        $submit->phone = $phone;
        $submit->province = $province;
        $submit->city = $city;
        $submit->area = $area;
        $submit->address = $address;
        $submit->type = $type;
        $submit->created = date('Y-m-d H:i:s');
        $id = $this->helper->insertTable('gift_info', (array) $submit);
        if($id) {
            $data = array('status' => 1, 'msg' => "提交成功！");
        } else {
            $data = array('status' => 0, 'msg' => "提交失败！");
        }
        $this->dataPrint($data);
    }

}
