const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send('Get request at Homepage');
    res.end();
})

app.post('/', (req,res) => {
    res.send('Post request at Homepage');
    res.end();
})

app.put('/', (req,res) => {
    res.send('Put request at Homepage');
    res.end();
})

app.delete('/', (req,res) => {
    res.send('Delete request at Homepage');
    res.end();
})

module.exports = app;