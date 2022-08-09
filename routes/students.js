const express = require(`express`);
const app = express();

const students = [];

app.get("/", (req, res) => {
    res.json(students);
});

app.post("/", (req, res) => {
    const alreadyIn = students.find(
        (student) => student.name === req.body.name
    );
    console.log(alreadyIn);
    if (!alreadyIn) {
        const student = {
            name: req.body.name,
        };
        students.push(student);
        res.json(student);
    } else {
        res.status(409).json("Student already exist");
    }
});

module.exports = app;
