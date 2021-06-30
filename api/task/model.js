// build your `Task` model here
const db = require('../../data/dbConfig');


function getTasks() {
    const tasks = db('tasks');
    return tasks;
};


async function createTask(task) {
    const [task_id]= await db('tasks').insert(task);
    return db('tasks').where({ task_id }).first();
};


module.exports = {
    getTasks,
    createTask
};