const express = require('express');
const request = require('request');
const cors = require("cors");

const app = express();
app.use(cors());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/api/drawings/euroJackpot', (req, res) => {
    setTimeout(()=> {
        request(
            { url: 'https://www.lottoland.com/api/drawings/euroJackpot' },
            (error, response, body) => {
                if (error || response.statusCode !== 200) {
                    return res.status(500).json({ type: 'error', message: error.message });
                }
    
                res.json(JSON.parse(body));
            }
        )

    },100)
});
app.get('/*',(req,res) => {

})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));