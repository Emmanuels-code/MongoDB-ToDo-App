const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

// GET all todos
router.get('/', async (req, res) => {
    try {
        const todos = await Todo.find().populate('userId category');
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
// GET todos for a specific user
router.get('/user/:userId', async (req, res) => {
    try {
        const userId = req.params.userId;
        const todos = await Todo.find({ userId }); // Query by userId
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// POST create a new todo
router.post('/', async (req, res) => {
    try {
        const todo = new Todo(req.body);
        await todo.save();
        res.status(201).json(todo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// PATCH update a todo
router.patch('/:id', async (req, res) => {
    try {
        const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(todo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// DELETE a todo
router.delete('/:id', async (req, res) => {
    try {
        await Todo.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Todo deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
