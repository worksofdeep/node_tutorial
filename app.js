const express = require('express');

const app = express();

// Add middle ware here - Start
app.use((req, res, next) => {
    console.log('first middleware');
    next(); // allows to travel to next middleware
});

app.use((req, res, next) => {
    console.log('second middleware');
    // res.setHeader(); // set response header - explicitly
    res.send('<h1>HELLO from second middleware</h1>');
});
// Add middle ware here - End

app.listen(3000);

