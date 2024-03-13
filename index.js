const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();



app.use(cors());
app.use(express.json());

app.listen(process.env.PORT, (err) => {
    if (err) {
        console.log("Error while starting the server : " + err);
        return;
    };
    console.log(`Server is running on port number ${process.env.PORT || 3000}`)
});

app.get('/', async(req, res) => {
    res.header(200).json({status: true, data: "You have done it"})
})