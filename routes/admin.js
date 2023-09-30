const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'))
});

router.post('/add-product', (req, res, next) => {
    if (req['body'] && req['body']['title']) {
        res.send(`<h1>Product: ${req['body']['title']}</h1>`);
    } else {
        res.redirect('/shop');
    }
});

module.exports = router;