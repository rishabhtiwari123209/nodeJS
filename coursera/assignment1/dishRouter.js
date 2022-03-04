var express = require('express');
https://github.com/jmuppala
var app = express();
var bodyParser = require('body-parser');
const margan = require('morgan');
const hn = 'localhost';
const PORT = 3000;

app.use(margan('dev'));
app.use(bodyParser.json());

app.all('/dishes', (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
});

app.get('/dishes', (req, res, next) => {
    res.end("willsend all the dishes to u");
});
app.post('/dishes', (req, res, next) => {
    res.end('will add the dishes  ' + req.body.name +
        'with deatail' + req.body.description);
});

app.put('/dishes', (req, res, next) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on  /dishes");
});

app.delete('/dishes', (req, res, next) => {
    res.end("deleing all the dishes");
});






app.get('/dishes/:dishId', (req, res, next) => {
    res.end("will send all the details  to u"+req.params.dishId);
});
app.post('/dishes/:dishId', (req, res, next) => {
    res.end('POST operation not supported on /dishes/  ' + req.params.dishId);
});


app.put('/dishes/:dishId', (req, res, next) => {
res.end('Updating the dish: '+req.params.dishId)
    res.end('will update the dish :'+req.body.name+'with deatails:'+req.params.dishId);
});

app.delete('/dishes/:dishId', (req, res, next) => {
    res.end("delete dish:"+req.params.dishId);
});







app.listen(PORT,()=>{
    console.log(`listening to the ${PORT}`);
});

