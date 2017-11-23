# SHA-Kenzo-BDJ`s API

### 1. 小样提交信息API

Method: POST

##### API URL:

```html
domian/api/giftinfo
```
##### Get Parameter

name: 张三, moblile: 13112345678, province:上海, city:上海, area:黄浦区, address:湖滨路

```javascript
{
name: '张三',
tel: '13112345678',
province: '上海',
city: '上海',
area: '黄浦区',
address: '湖滨路'
}
```


##### Response

##### status 1

```javascript
{
status: '1',
msg: '信息提交成功',
}
```

#####  status 0

```javascript
{
status: '0',
msg: '信息提交失败',
userStatus: {
    "isold": 0,
    "isgift": 1,
    "issubmit": 0,
    "isluckydraw": 0
  }
}
```