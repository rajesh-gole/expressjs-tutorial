const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    // Access the parsed body
    const { id, name } = req.body;
    
    res.json({
        data: {
            id, name
        },
        status: 200,
        meessage : 'success'
    })
})

module.exports = router;

