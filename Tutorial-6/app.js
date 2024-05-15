const express = require('express');
const app = express();
// const userRouter = require('./Routes/userRoute');
// app.use('/user', userRouter);

const firstMiddleware = (req, res, next) => {
    // console.log('Middleware Called');
    const currTime = new Date().toLocaleString();

    console.log(`[${currTime}] Request received for ${req.method} ${req.originalUrl}`);
    next();
}

app.use(firstMiddleware)

app.use((req, res, next) => {
    res.send('404 Bad Request')
})

app.get('/', (req, res) => {
    console.log('Home Route');
    res.send('Hi Rajesh');
    res.end();
})

module.exports = app;