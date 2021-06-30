const express = require('express')
const projectRouter = require('./project/router')
const resourceRouter = require('./resource/router')
const taskRouter = require('./task/router')
const server = express()

server.use(express.json())
server.use('/api/resources',resourceRouter);

server.use('/api/project',projectRouter);

server.use('/api/tasks',taskRouter);


module.exports = server