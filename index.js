const express = require('express');
const axios = require('axios');
const https = require('https');
const config = require('./config.json');

const app = express();
const port = 3000;

const axiosInstance = axios.create({
    httpsAgent: new https.Agent({  
        rejectUnauthorized: false
    })
});

async function checkService(url) {
    try {
        const response = await axiosInstance.get(url);
        return response.status === 200;
    } catch (error) {
        return false;
    }
}

app.get('/check', async (req, res) => {
    const serviceName = req.query.service;
    const service = config.services.find(service => service.name === serviceName);

    if (!service) {
        return res.status(404).send('Service not found.');
    }

    const isServiceUp = await checkService(service.url);

    if (isServiceUp) {
        res.status(200).send('Service ' + serviceName + ' is up.');
    } else {
        res.status(500).send('Service ' + serviceName + ' is down.');
    }
});

app.listen(port, () => {
    console.log(`Server running at ${port}`);
});
