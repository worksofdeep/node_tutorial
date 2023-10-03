const express = require('express');
const path = require('path');
const rootDir = require('../util/path');
const getDb = require('../util/database').getDb;

const router = express.Router();

router.get('/', (req, res, next) => {

    const db = getDb();

    db.collection('products').find().toArray().then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    });


    res.sendFile(path.join(rootDir, 'views', 'shop.html'))
});

module.exports = router;