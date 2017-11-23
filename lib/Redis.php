<?php
namespace Lib;

class Redis {

    private $_redis;

    public function __construct() {
        $redis = new \Redis();
        $redis->connect(REDIS_HOST, REDIS_PORT);
        $this->_redis = $redis;
    }

    public function setPhoneCode($key, $value, $expires_in) {
        $this->_redis->set($key, serialize($value));
        $this->_redis->setTimeout($key, $expires_in);
    }

    public function get($key) {
        $key_value = $this->_redis->get($key);
        return unserialize($key_value);
    }

    public function set($key, $value)
    {
        $this->_redis->set($key, serialize($value));
    }

    public function setTimeout($key, $expires_in)
    {
        $this->_redis->setTimeout($key, $expires_in);
    }
    
}