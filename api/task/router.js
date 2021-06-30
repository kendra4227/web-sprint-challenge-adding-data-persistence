// build your `/api/tasks` router here
const router = require('express').Router();
const Tasks = require('./model');


router.get('/', (req, res) => {
    Tasks.getTasks()
        .then(tasks => {
            res.status(200).json(tasks);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: "Error: Could not retrieve tasks", error: err });
        });
});

router.post('/', (req, res) => {
    const newTask = req.body;

    Tasks.createTask(newTask)
        .then(newT => {
            res.status(201).json(newT);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: "Error: Could not post new task", error: err });
        });
});


module.exports = router;