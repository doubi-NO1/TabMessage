# 简易的浏览器选项卡间通信库

## 使用方法
### 初始化
```javascript
  Notify.init("../core/notify.html", null, "Duplex");
```

### 接收
```javascript
  Notify.receive(function (obj) {
    console.log(obj);
  });
```

### 发送
```javascript
  //send内容随意，这里只做演示
  Notify.send({ from: 'which tab', message: 'your message'});
```
## 查看示例
### 在线地址
[查看](http://tabmessage.demos.party)

### 本地查看
```bash
  git clone https://github.com/doubi-NO1/TabMessage.git

  cd TabMessage
  
  node server.js
```
浏览器打开两个选项卡，分别输入[http://localhost:9090/test/tab1.html](http://localhost:9090/test/tab1.html)和[http://localhost:9090/test/tab2.html](http://localhost:9090/test/tab2.html)

## LICENSE
MIT