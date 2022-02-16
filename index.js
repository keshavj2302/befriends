const http = require('http');
const port1 = 8000;
const port2 = 5000;
const fs = require('fs');
const path = require('path');
const express = require('express');


const app = express();

// const server = http.createServer(requestHandler);

app.get('/', function(req, res){
    return res.send('Hello Beta namste!!');
});

app.listen(port2, function(err){
    if(err){console.log('Error in listening the server: ', err); return;}
    console.log('App server is running on port: ', port2);
});




// function requestHandler(req, res){
//     console.log(req.url);
//     fs.readFile(path.join(__dirname,'../Basichttpserver/index.html'), function(err, data){
//         if(err){console.log('Error in fetching the file: ', err); return;}
//         if(data){
//             return res.end(data);
//         }else{
//             return res.end('<h1>No file found!!</h1>');
//         }
//     });
    
// };



// server.listen(port1, function(err){
//     if(err){console.log('Error in listening the server: ', err); return;}
//     console.log('Server is up and running on port: ', port1);
//     return;
// });