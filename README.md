# SHA-Kenzo-BDJ`s API

##备注
```
1.domain/home.html ：入口文件
2.API list
    - 1.domain/api/phonecode :短信验证码
    - 2.domain/api/piccode：图片验证码
    - 3.domain/api/checkpiccode：验证图片验证码
    - 4.domain/api/submit :提交表单
```

---

### 1. 短信验证码API

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

---

### 2. 图片验证码API

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

### 3. 验证图片验证码API

Method: POST

##### API URL: 

```html
domain/api/checkpiccode
```
##### Get Parameter

picture=1q2w

```javascript
{
	picture: 1q2w 
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

### 4. 验证图片验证码API

Method: POST

##### API URL: 

```html
domain/api/checkpiccode
```
##### Get Parameter

picture=1q2w

```javascript
{
	picture: 1q2w 
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