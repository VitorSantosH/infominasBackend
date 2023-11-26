const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const http = require('http');
const app = express();
const axios = require('axios')


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('common'));
app.use('/', express.static('dist'))
app.get('/heros', async (req, res) => {

    await axios.get('http://homologacao3.azapfy.com.br/api/ps/metahumans')
        .then(responseAzapfy => {
            res.send(responseAzapfy.data)
        })
        .catch(err => {
            return res.send(err)
        })

})


const portHttp = 8050;

const httpServer = http.createServer(app);


httpServer.listen(portHttp, function () {
    console.log("JSON Server is running on " + portHttp);
});


