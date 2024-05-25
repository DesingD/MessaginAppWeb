const express = require('express');


const app = express();

// Define routes
app.get('/', (req, res) => {
    res.send('Hello world!');
});

// Start the server
const port = 3000;
app.listen(port, "0.0.0.0",() => {
    console.log(`Server is running on port ${port}`);
});