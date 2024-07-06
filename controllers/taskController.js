const Task = require('../models/Task');
const User = require('../models/User');

exports.createTask = async (req, res) => {
    const { title, description, dueDate, status, category, assignedTo } = req.body;
    const userId = req.userId;

    try {
        const task = await Task.create({ title, description, dueDate, status, category, UserId: userId, assignedTo });
        res.status(201).json(task);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.findAll({ include: { model: User, as: 'assignedTo' } });
        res.json(tasks);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateTask = async (req, res) => {
    const { id } = req.params;
    const { title, description, dueDate, status, category, assignedTo } = req.body;

    try {
        const task = await Task.findByPk(id);
        if (!task) return res.status(404).json({ error: 'Task not found' });

        task.title = title;
        task.description = description;
        task.dueDate = dueDate;
        task.status = status;
        task.category = category;
        task.assignedTo = assignedTo;

        await task.save();
        res.json(task);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteTask = async (req, res) => {
    const { id } = req.params;

    try {
        const task = await Task.findByPk(id);
        if (!task) return res.status(404).json({ error: 'Task not found' });

        await task.destroy();
        res.json({ message: 'Task deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
