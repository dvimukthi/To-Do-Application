const db = require('./db');

const getRecentTasks = async () => {
    const [rows] = await db.query('SELECT * FROM task ORDER BY created_at DESC LIMIT 5');
    return rows;
};

const addTask = async (title, description) => {
    const [result] = await db.query('INSERT INTO task (title, description) VALUES (?, ?)', [title, description]);
    return result.insertId;
};

const toggleTaskDone = async (id) => {
    await db.query('UPDATE task SET done = NOT done WHERE id = ?', [id]);
};

module.exports = { getRecentTasks, addTask, toggleTaskDone };
