const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>AaronDiable.co.uk Landing page');
})

app.listen('3000', () => {
    console.log('Server running');
})