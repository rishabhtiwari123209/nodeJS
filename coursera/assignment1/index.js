var express = require('express');https://github.com/jmuppala
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















app.all('/promations', (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
});
app.get('/promations', (req, res, next) => {
    res.end("willsend all the dishes to u");
});
app.post('/promations', (req, res, next) => {
    res.end('will add the dishes  ' + req.body.name +
        'with deatail' + req.body.description);
});

app.put('/promations', (req, res, next) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on  /dishes");
});

app.delete('/promations', (req, res, next) => {
    res.end("deleing all the dishes");
});






app.get('/promations/:promoId', (req, res, next) => {
    res.end("will send all the details  to u"+req.params.promoId);
});
app.post('/promations/:promoId', (req, res, next) => {
    res.end('POST operation not supported on /dishes/  ' + req.params.promoId);
});


app.put('/promations/:promoId', (req, res, next) => {
res.end('Updating the dish: '+req.params.promoId)
    res.end('will update the dish :'+req.body.name+'with deatails:'+req.params.promoId);
});

app.delete('/promations/:promoId', (req, res, next) => {
    res.end("delete dish:"+req.params.promoId);
});












// promations
app.all('/leaders', (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
});
app.get('/leaders', (req, res, next) => {
    res.end("willsend all the dishes to u");
});
app.post('/leaders', (req, res, next) => {
    res.end('will add the dishes  ' + req.body.name +
        'with deatail' + req.body.description);
});

app.put('/leaders', (req, res, next) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on  /dishes");
});

app.delete('/leaders', (req, res, next) => {
    res.end("deleing all the dishes");
});






app.get('/leaders/:leaderId', (req, res, next) => {
    res.end("will send all the details  to u"+req.params.leaderId);
});
app.post('/leaders/:leaderId', (req, res, next) => {
    res.end('POST operation not supported on /dishes/  ' + req.params.leaderId);
});


app.put('/leaders/:leaderId', (req, res, next) => {
res.end('Updating the dish: '+req.params.leaderId)
    res.end('will update the dish :'+req.body.name+'with deatails:'+req.params.leaderId);
});

app.delete('/leaders/:leaderId', (req, res, next) => {
    res.end("delete dish:"+req.params.leaderId);
});


app.use(express.static(__dirname + '/public'));

app.listen(PORT,()=>{
    console.log(`listening to the ${PORT}`);
});

