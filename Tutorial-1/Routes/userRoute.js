const express = require('express');
const router = express.Router();

//Router & Routing

router.get('/', (req,res) => {
    res.send('<h1>User Profile Route</h1>');
    res.end();
})

router.get('/register', (req,res) => {
    res.send('<h1>User Register Route</h1>');
    res.end();
})

router.get('/login', (req,res) => {
    res.send('<h1>User Login Route</h1>');
    res.end();
})




module.exports = router;