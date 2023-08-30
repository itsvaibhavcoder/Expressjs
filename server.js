// const http = require('http')
// http.createServer(function(req, res){
//     res.end('Hello World in Node Js using virtual server')
// }).listen(5000)


const express = require('express')

const app = express()

app.get('/contactus',function(req,res){
    res.end('This is contact us page express frameworks')
})

app.get('/', function(req, res){
     res.end('This is helloworld in homepage using express')
})

app.listen(5000, function(){
    console.log('Connection successfull')
})