console.log('I am a server!');

const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('gravy boat and train');
});

app.listen(process.env.PORT || 5000);