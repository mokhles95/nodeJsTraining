const http = require('http');
const express = require('express')
const app = express()
const hostname = '127.0.0.1';
const port = 3000;
var bodyParser = require('body-parser')
 
 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
 
// app.use(function (req, res) {
//   res.setHeader('Content-Type', 'text/plain')
//   res.write('you posted:\n')
//   res.end(JSON.stringify(req.body, null, 2))
// })

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello, World!\n');
// });
app.get('/', (req,res,next)=>{
    res.send("hello")
})

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});