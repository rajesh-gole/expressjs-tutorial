const express = require('express');
const app = express();
const userRoutes = require('./Routes/userRoute')

// HTTP Methods
// app.get('/', (req,res) => {
//     res.send('Get request at Homepage');
//     res.end();
// })

// app.post('/', (req,res) => {
//     res.send('Post request at Homepage');
//     res.end();
// })

// app.put('/', (req,res) => {
//     res.send('Put request at Homepage');
//     res.end();
// })

// app.delete('/', (req,res) => {
//     res.send('Delete request at Homepage');
//     res.end();
// })

//Router & Routing

// app.get('/', (req,res) => {
//     res.send('<h1>User Profile Route</h1>');
//     res.end();
// })

// app.get('/register', (req,res) => {
//     res.send('<h1>User Register Route</h1>');
//     res.end();
// })

// app.get('/login', (req,res) => {
//     res.send('<h1>User Login Route</h1>');
//     res.end();
// })


app.use('/user',userRoutes);

app.use((req, res) => {
    res.send('<h1>Page Not Found!!!</h1>')
})


module.exports = app;