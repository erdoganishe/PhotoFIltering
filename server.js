const express = require('express');
const db = require('./config/db');

//Init Server
const app = express();
const PORT = 3500;

//Start database
db();

app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`);
});
