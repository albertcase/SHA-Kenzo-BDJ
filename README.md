# SHA-Kenzo-BDJ`s API

##备注
```
1.domain/home.html ：入口文件
2.API list
    - 1.domain/api/phonecode :短信验证码
    - 2.domain/api/submit :提交表单
3.授权登陆
    - http://127.0.0.1:9123/Initialization （js引用）
```

### 1. 短信验证API

Method: POST

##### API URL: 

```html
domain/api/phonecode
```
##### Get Parameter

phone:13112311231

```javascript
{
    phone : 13112311231
}
```

##### Response

##### status 1

```javascript
{
    status: '1',
    msg: '发送成功！',
}
```

#####  status 0

```javascript
{
    status: '0',
    msg: '发送失败！',
}
```