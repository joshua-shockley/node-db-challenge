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

server.get('/api/resources', (req, res) => {
    DataB.findResources()
        .then(resources => {
            res.status(200).json(resources);
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

server.get('/api/projects/:id', (req, res) => {
    DataB.findOneProject(req.params.id)
        .then(project => {
            res.status(200).json(project);
        })
        .catch(error => {
            res.status(500).json(error, 'what happend, Homey?!');
        });
});


module.exports = server;