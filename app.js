const http = require('http');

const express = require('express');

const app = express();

// Add middle ware here - Start
app.use((req, res, next) => {
    console.log('first middleware');
    next(); // allows to travel to next middleware
});

app.use((req, res, next) => {
    console.log('second middleware');
});
// Add middle ware here - End

const server = http.createServer(app);

server.listen(3000);

