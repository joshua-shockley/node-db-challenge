const db = require('../data/db-config.js');


module.exports = {
    //list the models like find or findById
    findProjects,
    addProjects,
    findResources,
    addResources,
    findTasks,
    addTasks,
    findOneProject,
    findPTasks

}

function findResources() {
    return db('resources');
}

function addResources(resource) {
    return db('resources')
        .insert(resource, 'id');
}

function findProjects() {
    return db('projects');
}

function addProjects(project) {
    return db('projects')
        .insert(project, 'id');
}


function findTasks() {
    return db('tasks');
}

function addTasks(task) {
    return db('tasks')
        .insert(task, 'id');
}

function findOneProject(projectId) {
    return db('projects as p')
        .where('p.id', projectId);
}


function findPTasks(projectId) {
    return db('projects as p')
        .where('p.id', projectId)
        .join('tasks as t', 'p.id', '=', 't.projects_id')
        .select('p.projectName', 'p.projectDescription', 't.taskCompleted', 't.taskDescription');
}