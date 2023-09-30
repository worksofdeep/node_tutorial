const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Third party middle ware
app.use('/', bodyParser.urlencoded({ extended: false }))

// Add middle ware here - Start

app.use('/', (req, res, next) => {
    // console.log('Always run for all paths');
    next();
});

app.get('/add-product', (req, res, next) => {
    res.send(`<form method="POST" action="/product">
    <input type="text" name="title"/>
    <button type="submit">Submit</button>
    </form>`);
});

app.post('/product', (req, res, next) => {
    console.log(req['body']);
    if (req['body'] && req['body']['title']) {
        res.send(`<h1>Product: ${req['body']['title']}</h1>`);
    } else {
        res.redirect('/');
    }

});

app.use('/', (req, res, next) => {
    res.send('<h1>Default Path</h1>');
});

// Add middle ware here - End

app.listen(3000);

