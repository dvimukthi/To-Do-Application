const express = require('express');
const cors = require('cors');

const app = express();

const PORT = 8080;

app.get("/", (req, res) => {
    res.send("Hello, Todo App!!!!!");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});