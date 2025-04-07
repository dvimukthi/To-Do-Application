const Task = require('../models/taskModel');

exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.getRecentTasks();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createTask = async (req, res) => {
    try {
        const { title, description } = req.body;
        if (!title || !description) return res.status(400).json({ error: "Title and Description are required." });

        const taskId = await Task.addTask(title, description);
        res.status(201).json({ id: taskId, title, description, done: false });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.toggleTask = async (req, res) => {
    try {
        const { id } = req.params;
        await Task.toggleTaskDone(id);
        res.json({ message: "Task status updated successfully." });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
