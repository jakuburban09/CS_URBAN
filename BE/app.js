const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors'); // import the cors middleware

app.use(cors()); // enable CORS for all routes

app.use(express.json())

app.use(bodyParser.urlencoded({ extended: true }));

const data = []

app.get('/api/companyData', (req, res) => {
    res.status(200).json({
        message: 'Company data Fetched Successfully',
        data: data
    });
});

app.post('/api/companyData', (req, res) => {
    const dataFromPost = req.body;
    data.push(dataFromPost)
    console.log(data)
    res.send('Company data received successfully');
});

const port = 8080;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

module.exports = app;