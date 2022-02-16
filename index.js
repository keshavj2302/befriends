const http = require('http');
const port = 8000;
const fs = require('fs');
const path = require('path');
const express = require('express');
const ejs = require('ejs');
const ejsLayouts = require('express-ejs-layouts');
const sassMiddleware = require('node-sass-middleware');

// firing express
const app = express();


app.use(sassMiddleware({
    src:'./assets/SCSS',
    dest:'./assets/CSS',
    debug:true,
    outputStyle:'extended',
    prefix:'/CSS'
}))


app.use('/', require('./routes/index'));

// using ejs as our view engine
app.set('view engine', 'ejs');
app.set('views', './views');


app.use(express.static('./assets'));


app.listen(port, function(err){
    if(err){console.log('Error in listening the server: ', err); return;}
    console.log('server is running on port: ', port);
});




// Server is running without express through node only
// 
// const port1 = 8000;
// const server = http.createServer(requestHandler);
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