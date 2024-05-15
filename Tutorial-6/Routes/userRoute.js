const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    
    res.send(`<h1> Hi Rajesh </h1>`);
    res.end();
    
})

module.exports = router;