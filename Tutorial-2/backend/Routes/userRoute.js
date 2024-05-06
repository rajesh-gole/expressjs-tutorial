const express = require('express');
const router = express.Router();

let users = [];

router.post('/register', (req,res) => {
    const { username, email, password } = req.body;
    
    const existingUser = users.find(user => user.username === username);

    if (existingUser) {
        return res.status(400).json({
            error: 'Username already exists'
        })
    }

    const newUser = { username, email, password };

    users.push(newUser);

    res.setHeader('Content-Type', 'application/json');
    res.status(201);
    res.cookie('loggedIn', true);
    res.json({
        message: 'User Registered Successfully',
        user: newUser
    })

})

router.post('/login', (req,res) => {
    const { username, password } = req.body;
    const user = users.find(user => user.username === username);
    if (!user) {
        return res.status(401).json({error : "Invalid Username"})
    }

    if (user.password !== password) {
        return res.status(401).json({ error: "Invalid Password" });
    }

    res.setHeader('Content-Type', 'text/html');
    res.status(200);
    res.cookie('loggedIn', true);
    res.send('<h1>Welcome back, '+ user.username +'!</h1>')
})

router.post('/logout', (req, res) => {
    res.clearCookie('loggedIn');
    res.status(200).json({
        message: "Logged out successfully"
    })
})

module.exports = router;