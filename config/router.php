<?php

$routers = array();
//System
$routers['/wechat/callback'] = array('WechatBundle\Wechat', 'callback');
$routers['/wechat/curio/callback'] = array('WechatBundle\Coach', 'callback');
$routers['/wechat/same/callback'] = array('WechatBundle\Same', 'callback');
$routers['/wechat/curio/receive'] = array('WechatBundle\Coach', 'receiveUserInfo');
$routers['/wechat/jssdk/config/js'] = array('WechatBundle\Wechat', 'jssdkConfigJs');
$routers['/simulation/login'] = array('WechatBundle\Wechat', 'simulationLogin');
$routers['/clear'] = array('CampaignBundle\Page', 'clearCookie');
//System end

//Campaign
$routers['/ajax/post'] = array('CampaignBundle\Api', 'form');
$routers['/'] = array('CampaignBundle\Page', 'index');
// $routers['/initialization'] = array('CampaignBundle\Page', 'login');

//Api
$routers['/api/phonecode'] = array('CampaignBundle\Api', 'phoneCode');
$routers['/api/piccode'] = array('CampaignBundle\Api', 'pictureCode');
$routers['/api/checkpiccode'] = array('CampaignBundle\Api', 'checkPicture');
$routers['/api/submit'] = array('CampaignBundle\Api', 'submit');
$routers['/api/stock'] = array('CampaignBundle\Api', 'checkgift');