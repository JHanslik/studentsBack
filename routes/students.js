const express = require(`express`);
const app = express();

const students = [];

app.get("/", (req, res) => {
    res.json(students);
});

app.post("/", (req, res) => {
    const student = {
        name: req.body.name,
    };
    res.json(student);
});

module.exports = app;
