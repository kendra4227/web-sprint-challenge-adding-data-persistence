const db = require('.../data/dbConfig')

function getProjects(){
    return db('projects');
}

function getProjectById(project_id){
    return db("tasks as t")
    .innerJoin("projects as p", "t.project_id", "p.id")
    .where('project_id', projectId)
    .select([
        "t.id",
        "t.description",
        "t.notes",
        "t.completed",
        "p.name as projectName",
        "p.description as projectDescription"
    ]);
}

function addProject(project) {
    return db("projects").insert(project);
}
function addTask(task) {
    return db("tasks").insert(task);
}

module.exports = {
    getProjects,
    getProjectById,
    getProjectTasks,
    addProject,
    addTask
}