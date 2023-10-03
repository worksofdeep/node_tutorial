const express = require('express');
const path = require('path');
const rootDir = require('../util/path');
const getDb = require('../util/database').getDb;

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
});

router.post('/add-product', (req, res, next) => {
    if (req['body'] && req['body']['title']) {

        const db = getDb();

        db.collection('products').insertOne(
            { title: req['body']['title'] }
        ).then((result) => {
            res.send(`<h1>Product: ${req['body']['title']}</h1>
            <img src="/images/shop.png"/>`);
        }).catch((err) => {
            console.log('error while adding', err)
            res.redirect('/shop');
        });

    } else {

    }
});

module.exports = router;