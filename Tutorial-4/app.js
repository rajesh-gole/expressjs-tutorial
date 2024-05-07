const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userRouter = require('./Routes/userRoute');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/user', userRouter);

app.use((req, res) => {
    res.send('<h1>Page Not Found!!!</h1>')
})


module.exports = app;