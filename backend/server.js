const express = require('express');
const axios = require('axios');
const cors = require("cors");

const app = express();

app.use(cors());

require('dotenv').config();

const PORT = process.env.PORT;
const API_KEY = process.env.API_KEY;
const API_ACCESS_TOKEN = process.env.API_ACCESS_TOKEN;

app.get('/popular-movies', (req, res) => {
    console.log("call");
    // Options pour la requête à l'API
    const options = {
        url: 'https://api.themoviedb.org/3/movie/popular',
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + API_ACCESS_TOKEN,
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        },
    }

    // Envoyer la requête à l'API
    axios(options).then(response => {
        res.send(response.data)
    });
});

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});