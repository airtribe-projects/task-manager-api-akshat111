const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let tasks = [
    {
        id:1,
        title: "learn Node.js",
        description: "learn nodejs from the course",
        completed: false
    },
    {
        id:2,
        title: "learn Reactjs",
        description: "learn reactjs from the course",
        completed: true
    },
    {
        id: 3,
        title: "learn dsa",
        description: "learn dsa from the course",
        completed: true
    }
]

app.get("/tasks", (req,res) => {
    res.json(tasks);
});

app.get("/tasks/:id", (req,res) => {
    const {id} = req.params;

    const task = tasks.find(t => t.id == id);

    if(task){
        res.json(task);
    } else {
        res.status(404).json({message: 'Task not Found'});
    }
});

let nextId = 4;
app.post('/tasks', (req,res) => {
    const {title, description, completed } = req.body;
    if( !title || !description) {
        return res.status(400).json({ message : "Title and description are required."});
    }

    const isCompleted = typeof completed == 'boolean' ? completed : false;
    const newID = String(nextId++);

    const newTask = {
        id: newID,
        title,
        description,
        completed: isCompleted
    };

    tasks.push(newTask);

    res.status(201).json(newTask);
})

app.put('/tasks/:id' , (req,res) => {
    const {id} = req.params;
    const {title, description , completed} = req.body;

    const taskIndex = tasks.findIndex(t => t.id == id);

    if(taskIndex === -1) {
        return res.status(404).json({message: 'Task not found'});
    }

    const existingTask = tasks[taskIndex];

    const updatedTask = {
        id: existingTask.id,
        title: title !== undefined ? title : existingTask.title,
        description: description !== undefined ? description : existingTask.description,
        completed: typeof completed === 'boolean' ? completed : existingTask.completed
    };

    tasks[taskIndex] = updatedTask;

    res.json(updatedTask);
})

app.delete('/tasks/:id', (req,res) => {
    const {id} = req.params;
    const initialLength = tasks.length;
    tasks = tasks.filter(t => t.id !== parseInt(id));

    if(tasks.length < initialLength) {
        res.status(204).send();
    } else {
        res.status(404).json({message: 'Task not found'});
    }
});

app.listen(port, (err) => {
    if (err) {
        return console.log('Something bad happened', err);
    }
    console.log(`Server is listening on ${port}`);
});



module.exports = app;