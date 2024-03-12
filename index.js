const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();



app.use(cors());
app.use(express.json());

app.listen(process.env.CYCLIC_URL || 3000, (err) => {
    if (err) {
        console.log("Error while starting the server : " + err);
        return;
    };
    console.log(`Server is running on port number ${process.env.CYCLIC_URL || 3000}`)
});