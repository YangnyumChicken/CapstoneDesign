const http = require('http');
var path = require('path');

var express = require('express')
var app = express()

app.use(express.static(__dirname+"/public"));

app.get('/', function (req, res) 
{
    res.sendFile(__dirname + '/view/MainHomePage.html');
})

.listen(8080, () => 
{ // 서버 연결
    console.log('8080번 포트에서 서버 대기 중입니다!');
}
);