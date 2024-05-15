const express = require('express');
const bodyParser = require('body-parser');

const todoController = require('./controllers/todoController')

const app = express();
const PORT = 3000;
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/todos', todoController.getTodos);
app.post('/todos', todoController.addTodo)


app.listen(PORT, () => {
    console.log(`Server Started at http://localhost:${PORT}`);
})