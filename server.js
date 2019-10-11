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


module.exports = server;