const express = require("express");
const cors = require("cors");
const db = require("./models/db");

const app = express();
app.use(cors());
app.use(express.json());

// Get the 5 most recent tasks
app.get("/tasks", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM task ORDER BY created_at DESC LIMIT 5");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a new task
app.post("/tasks", async (req, res) => {
  const { title, description } = req.body;
  try {
    await db.query("INSERT INTO task (title, description) VALUES (?, ?)", [title, description]);
    res.json({ message: "Task added successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Mark task as done/undo
app.put("/tasks/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await db.query("UPDATE task SET done = NOT done WHERE id = ?", [id]);
    res.json({ message: "Task updated successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete a task
app.delete("/tasks/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await db.query("DELETE FROM task WHERE id = ?", [id]);
    res.json({ message: "Task deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



