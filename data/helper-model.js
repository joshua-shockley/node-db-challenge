const db = require('../data/db-config.js');


module.exports = {
    //list the models like find or findById
    findProjects,
    findResources,
    findTasks,
    findOneProject,
    findPTasks

}

function findResources() {
    return db('resources');
}

function findProjects() {
    return db('projects');
}

function findTasks() {
    return db('tasks');
}

function findOneProject(projectId) {
    return db('projects as p')
        .where('p.id', projectsId);
}

function findPTasks(projectsId) {
    return db('projects as p')
        .where('p.id', projectsId)
        .join('tasks as t', 'p.id', '=', 't.projects_id')
        .select('p.projectName', 'p.projectDescripton', 't.taskCompleted', 't.taskDescription');
}