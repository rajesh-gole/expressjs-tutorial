const todoModel = require('../models/todoModel');

const getTodos = (req, res) => {
    const todos = todoModel.getAllTodos();
    res.render('todos', {todos})
}

const addTodo = (req, res) => {
    const todo = req.body.todo;
    todoModel.addTodo(todo);
    res.redirect('/todos')
}

module.exports = {getTodos, addTodo}