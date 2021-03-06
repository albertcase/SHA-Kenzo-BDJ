# SHA-Kenzo-BDJ`s API

##备注
```
1.domain/home.html ：入口文件
2.API list
    - 1.domain/api/piccode : 图片验证码 (验证只要用过一次，不管成功还是失败都会失效)
    - 2.domain/api/checkpiccode : 验证图片验证码 
    - 3.domain/api/submit : 提交表单
    - 4.domain/api/stock : 判断库存
3.JSSDK分享 : http://kenzowechat.samesamechina.com/weixin/jssdkforsite
  - mini : http://kenzowechat.samesamechina.com/weixin/jssdkforsitemin
```

---


### 1. 图片验证码API

Method: POST

##### API URL: 

```html
domain/api/piccode
```
##### Get Parameter

null

```javascript
{

}

```

##### Response

##### status 1

```javascript
{
  "status": 1,
  "msg": "获取成功！",
  "picture": base64图片流
}
```

#####  status 0

```javascript
{
    status: '0',
    msg: '获取失败！',
}
```

---

### 2. 验证图片验证码API

Method: POST

##### API URL: 

```html
domain/api/checkpiccode
```
##### Get Parameter

picture=1q2w&phone=13112311231

```javascript
{
	picture: 1q2w,
	phone: 13112311231
}

```

##### Response

##### status 1

```javascript
{
  "status": 1,
  "msg": "验证码正确！",
}
```

#####  status 0

```javascript
{
    status: '0',
    msg: '验证码错误！',
}
```

---

### 3. 提交信息API

Method: POST

##### API URL: 

```html
domain/api/submit
```
##### Get Parameter

name=evenly&phone=13112311231&phonecode=1234&province=安徽&city=合肥&area=城区&address=好人大街&type=gift1&refer=from_wechat

```javascript
{
	name: evenly,
	phone: 13112311231,
	phonecode: 1234,
	province: 安徽,
	city: 合肥,
	area: 城中区,
	address: 好人大街,
	type: gift1,
	refer: from_wechat
}

```

##### Response

##### status 1

```javascript
{
  "status": 1,
  "msg": "提交成功！",
}
```

#####  status 0

```javascript
{
    status: '0',
    msg: '提交失败！',
}
```

#####  status 2

```javascript
{
    status: '2',
    msg: '该礼品已经领过！',
}
```

#####  status 3

```javascript
{
    status: '3',
    msg: '手机验证码错误！',
}
```

#####  status -1

```javascript
{
    status: '-1',
    msg: '库存已空！',
}
```

---

### 4. 判断库存API

Method: POST

##### API URL: 

```html
domain/api/stock
```
##### Get Parameter

type=gift1

```javascript
{
	type: gift1
}

```

##### Response

##### status 1

```javascript
{
  "status": 1,
  "msg": "有库存！",
}
```

#####  status 0

```javascript
{
    status: 0,
    msg: '没库存！',
}
```