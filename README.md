# 简易的浏览器间通信库

## 使用方法
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
  //send内容随意，这里只做演示
  Notify.send({ from: 'which tab', message: 'your message'});
```

## 查看示例
```bash
  node server.js
```
浏览器打开两个选项卡，分别输入[http://localhost:9090/test/tab1.html](http://localhost:9090/test/tab1.html){:target="_blank"}和[http://localhost:9090/test/tab2.html](http://localhost:9090/test/tab2.html){:target="_blank"}

## LICENSE
MIT