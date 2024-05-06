const express = require('express');
const app = express();
const userRouter = require('./Routes/userRoute');

app.use(express.json());

app.use('/user', userRouter);

app.use((req, res) => {
    res.send('<h1>Page Not Found!!!</h1>')
})


module.exports = app;