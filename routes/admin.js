const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    res.send(`<form method="POST" action="/product">
    <input type="text" name="title"/>
    <button type="submit">Submit</button>
    </form>`);
});

router.post('/product', (req, res, next) => {
    console.log(req['body']);
    if (req['body'] && req['body']['title']) {
        res.send(`<h1>Product: ${req['body']['title']}</h1>`);
    } else {
        res.redirect('/');
    }
});

module.exports = router;