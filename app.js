const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoConnect = require('./util/database').mongoConnect;

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// Third-party middleware
app.use('/', bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Custom middleware to run for all requests
app.use('/', (req, res, next) => {
    // console.log('Custom middleware to run for all requestss');
    next();
});

// Routes
app.use('/admin', adminRoutes);
app.use('/', shopRoutes);

// 404 Page for invalid/unmatched paths
app.use('/', (req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})

mongoConnect(() => {
    console.log('app.js -  mongodb connected');
    app.listen(3000);
});

