const express = require('express');

const app = express();

// Add middle ware here - Start

app.use('/', (req, res, next) => {
    console.log('Always run for all paths');
    next();
});

app.use('/add-product', (req, res, next) => {
    console.log('add product path');
    res.send('<h1>Add Product</h1>');
});

app.use('/', (req, res, next) => {
    console.log('Default Path');
    // res.setHeader(); // set response header - explicitly
    res.send('<h1>Default Path</h1>');
});

// Add middle ware here - End

app.listen(3000);

