const express = require('express');
const helmet = require('helmet');

const db = require('./data/db-config.js');
//where i bring in helper-model aka data access
const DataB = require('./data/helper-model.js');
const server = express();

server.use(helmet());
server.use(express.json());

//test server is working
server.get('/', (req, res) => {
    res.send('<h1>hello dudelys</h1>');
});

//other endpoints go here
server.get('/api/projects', (req, res) => {
    DataB.findProjects()
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

server.post('/api/projects', (req, res) => {
    const pData = req.body;
    DataB.addProjects(pData)
        .then(newProject => {
            res.status(200).json(newProject);
        })
        .catch(error => {
            res.status(500).json(error);
        })
});

server.get('/api/resources', (req, res) => {
    DataB.findResources()
        .then(resources => {
            res.status(200).json(resources);
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

server.post('/api/resources', (req, res) => {
    const rData = req.body;
    DataB.addResources(rData)
        .then(newresource => {
            res.status(200).json(newresource);
        })
        .catch(error => {
            res.status(500).json(error);
        })
});

server.get('/api/tasks', (req, res) => {
    DataB.findTasks()
        .then(tasks => {
            res.status(200).json(tasks);
            console.log(tasks.taskCompleted);
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

server.get('/api/projects/:id', (req, res) => {
    const id = req.params.id;
    DataB.findOneProject(id)
        .then(project => {
            res.status(200).json(project);
        })
        .catch(error => {
            res.status(500).json(error, 'what happend, Homey?!');
        });
});

server.get('/api/projects/:id/tasks', (req, res) => {
    DataB.findPTasks(req.params.id)
        .then(tasks => {
            res.status(200).json(tasks);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json(error);
        });
});

server.post('/api/projects/:id/tasks', (req, res) => {
    const id = req.params.id;
    const newTask = req.body;
    DataB.findOneProject(req.params.id)
        .then(addTask => {
            if (addTask) {
                DataB.addTasks(newTask, id)
                    .then(task => {
                        res.status(200).json(task);
                    })
            } else {
                res.status(400).json({ message: 'couldnt find that id' });
            };
        })
        .catch(error => {
            res.status(500).json(error);
        });
});


module.exports = server;