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

        // ajax 请求的处理方式 
        if(isset($_SERVER["HTTP_X_REQUESTED_WITH"]) && strtolower($_SERVER["HTTP_X_REQUESTED_WITH"])=="xmlhttprequest"){ 
            //@TODO ? 
        } else{ 
            $this->statusPrint('100', 'access deny!');
        }

        $this->_pdo = PDO::getInstance();
        $this->helper = new Helper();
    }

    public function checkgiftAction()
    {
        $request = $this->request;
        $fields = array(
            'type' => array('notnull', '120'),
        );
        $request->validation($fields);
        $type = $request->request->get('type');
        if($this->checkGiftNum($type)) {
            $data = array('status' => 1, 'msg' => '有库存！');
        } else {
            $data = array('status' => 0, 'msg' => '没库存！');
        }
        $this->dataPrint($data);
    }

    public function checkGiftNum($type)
    {
        $redis = new Redis();
        $num = (int) $redis->hGet('quality', $type);
        if($num > 0) {
            return TRUE;
        } else {
            return FALSE;
        }
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
        $phone = $request->request->get('phone');
        // if($this->sendSMS($phone)) {
        //     $data = array('status' => 1, 'msg' => '发送成功！');
        // } else {
        //     $data = array('status' => 0, 'msg' => '发送失败！');
        // }
        $data = array('status' => 1, 'msg' => '发送成功！');
        $this->dataPrint($data);
    }

    public function sendSMS($phone)
    {
        $ch = curl_init();
        $apikey = "b42c77ce5a2296dcc0199552012a4bd9";
        $code = rand(1000, 9999);
        $RedisAPI = new Redis();
        $RedisAPI->setPhoneCode($phone, $code, 60);
        $text = "【Kenzo凯卓】您的验证码是{$code}";
        $data = array(
            'text' => $text,
            'apikey' => $apikey,
            'mobile' => $phone
        );
        curl_setopt ($ch, CURLOPT_URL, 'https://sms.yunpian.com/v2/sms/single_send.json');
        curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
        curl_setopt($ch, CURLOPT_RETURNTRANSFER,true);
        $json_data = curl_exec($ch);
        return true;
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
            $this->_redis->setTimeout($mobile, 0);
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
            'phone' => array('cellphone', '121'),
        );
        $request->validation($fields);
        $picture = $request->request->get('picture');
        $phone = $request->request->get('phone');

        $captcher = $this->getCaptcher();
        if(strtolower($picture) == strtolower($captcher)) {
            $this->sendSMS($phone);
            $data = array('status' => 1, 'msg' => '验证码正确！');
        } else {
            $data = array('status' => 0, 'msg' => '验证码错误！');
        }
        $this->delCaptcher();
        $this->dataPrint($data);
    }

    public function setCaptcher($captcher)
    {
        $this->delCaptcher();
        $request = $this->request;
        $helper = new Helper();
        $text = base64_encode($helper->aes128_cbc_encrypt(ENCRYPT_KEY, $captcher, ENCRYPT_IV));
        if(USER_STORAGE == 'COOKIE') { 
            setcookie('_captcher', $text, time() + 300, '/', $request->getDomain());
        } else {
            $_SESSION['_captcher'] = $text;
        }
        return $text;
    }

    public function getCaptcher()
    {
        $helper = new Helper();
        if(USER_STORAGE == 'COOKIE') { 
            $text = $helper->aes128_cbc_decrypt(ENCRYPT_KEY, base64_decode($_COOKIE['_captcher']), ENCRYPT_IV);
        } else {
            $text = $helper->aes128_cbc_decrypt(ENCRYPT_KEY, base64_decode($_SESSION['_captcher']), ENCRYPT_IV);
        }
        return $text;
    }

    public function delCaptcher()
    {
               $request = $this->request;
        if(USER_STORAGE == 'COOKIE') { 
            unset($_COOKIE['_captcher']);
            setcookie('_captcher', '', time(), '/', $request->getDomain());
        } else {
            unset($_SESSION['_captcher']);
        }
    }

    /**
     * 获取图片验证码
     */
    public function pictureCodeAction()
    {
        $captcha = new Captcher(150, 65);
        $captchaImage = $captcha->generate();
        $captchaText = $captcha->getCaptchaText();
        if($this->setCaptcher($captchaText)) {
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
            'refer' => array('notnull', '120'),
        );
        $request->validation($fields);
        var_dump($request);exit;
        $name = $request->request->get('name');
        $phone = $request->request->get('phone');
        $phonecode = $request->request->get('phonecode');
        $province = $request->request->get('province');
        $city = $request->request->get('city');
        $area = $request->request->get('area');
        $address = $request->request->get('address');
        $type = $request->request->get('type');
        $refer = $request->request->get('refer');

        //lock 10s
        $redis = new Redis();
        //一个手机号每款礼品 10秒钟之内不允许重复抢！
        $lockKey = $name . $phone . $type;
        if($redis->get($lockKey)) {
            $data = array('status' => 4, 'msg' => "您的操作过于频繁！请稍后再试！");
            $this->dataPrint($data);
        } else {
            $redis->set($lockKey, 1);
            $redis->setTimeout($lockKey, 10);
        }

        if(!$this->checkGiftNum($type)) {
            $redis->setTimeout($lockKey, 0);
            $data = array('status' => -1, 'msg' => "库存已空！");
            $this->dataPrint($data);
        }

        //手机验证码错误！
        if(!$this->checkMsgCode($phone, $phonecode)) {
            $redis->setTimeout($lockKey, 0);
            $data = array('status' => 3, 'msg' => "手机验证码错误！");
            $this->dataPrint($data);
        }

        //已经领过礼品！
        if($this->findGiftByPhone($phone, $type)) {
            $redis->setTimeout($lockKey, 0);
            $data = array('status' => 2, 'msg' => "该礼品已经领过！");
            $this->dataPrint($data);
        }

        $submit = new \stdClass();
        $submit->name = $name;
        $submit->phone = $phone;
        $submit->province = $province;
        $submit->city = $city;
        $submit->area = $area;
        $submit->address = $address;
        $submit->type = $type;
        $submit->refer = $refer;
        $submit->created = date('Y-m-d H:i:s');

        if(!$this->checkGiftNum($type)) {
            $redis->setTimeout($lockKey, 0);
            $data = array('status' => -1, 'msg' => "库存已空！");
            $this->dataPrint($data);
        }

        $id = $this->helper->insertTable('gift_info', (array) $submit);
        if($id) {
            $redis->hInCrby('quality', $type, -1);
            $data = array('status' => 1, 'msg' => "提交成功！");
        } else {
            $data = array('status' => 0, 'msg' => "提交失败！");
        }

        //dellock
        $redis->setTimeout($lockKey, 0);

        $this->dataPrint($data);
    }

    public function findGiftByPhone($phone, $type)
    {
        $sql = "SELECT `id`, `name` FROM `gift_info` WHERE `phone` = :phone AND `type` = :type";
        $query = $this->_pdo->prepare($sql);
        $query->execute(array(':phone' => $phone, ':type' => $type));
        $row = $query->fetch(\PDO::FETCH_ASSOC);
        if($row) {
            return  TRUE;
        }
        return FALSE;
    }

}
