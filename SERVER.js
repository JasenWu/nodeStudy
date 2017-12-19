//express_demo.js 文件
var express = require('express');
var app = express();
var fs = require("fs");

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'test'
});

connection.connect();

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
    else  next();
});


//添加的新用户数据
var user = {
   "user4" : {
      "name" : "mohit",
      "password" : "password4",
      "profession" : "teacher",
      "id": 4
   }
}




//用户列表
app.post('/list', function (req, res) {
   // fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
   //     console.log( data );
   //     res.end(data);
   // });

   connection.query('SELECT * FROM websites', function (error, results, fields) {
     if (error) throw error;
     res.writeHead(200, {'Content-Type':'text/plain;charset=utf-8'});
     res.end(JSON.stringify(results));

   });

})

//增加用户
app.get('/add', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       var data = JSON.parse(data);
       data["user4"] = user["user4"];
       res.end(JSON.stringify(data));
   });
})

//用户详情
app.get('/:id', function (req, res) {
   // 首先我们读取已存在的用户
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       var user = data["user" + req.params.id]
       console.log( user );
       res.end( JSON.stringify(user));
   });
})


//删除用户
app.get('/deleteUser', function (req, res) {

   // First read existing users.
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       delete data["user" + 2];
       console.log( data );
       res.end( JSON.stringify(data));
   });
})

var server = app.listen(8099, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://localhost", host, port)

})
