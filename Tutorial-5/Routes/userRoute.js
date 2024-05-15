const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    
    res.send(`<h1> .ENV Variable Tutorial </h1>`);
    res.end();
    
})

module.exports = router;