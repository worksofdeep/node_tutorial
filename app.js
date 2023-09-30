const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// Third-party middleware
app.use('/', bodyParser.urlencoded({ extended: false }))

// Custom middleware to run for all requests
app.use('/', (req, res, next) => {
    // console.log('Custom middleware to run for all requestss');
    next();
});

// Routes
app.use(adminRoutes);
app.use(shopRoutes);

// 404 Page for invalid/unmatched paths
app.use('/', (req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>');
})

app.listen(3000);

