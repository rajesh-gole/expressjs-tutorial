const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    //Query Params
    // // const id = req.query.id
    // // const name = req.query.name

    // const { id, name } = req.query;

    // // res.send(`<h1>User name = ${name} id is = ${id}</h1>`)
    // res.status(200);
    // res.json({
    //     message: "Data fetched successfully",
    //     data: {
    //         id, name
    //     }
    // })

    // Route Params

    // const id = req.params.id;
    // const name = req.params.name;

    // res.send(`<h1>User name: ${name} id:  ${id}</h1>`)

    // Request with headers

    const id = req.header('id');
    const name = req.header('name');

    res.send(`<h1>User name: ${name} , id:  ${id}</h1>`)



})

module.exports = router;