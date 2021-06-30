const router = require('express').Router()
const {validateProjectId,validateTask} = require(".../middleware/projectMiddleware")

const Project = require('./model')


router.get('/', async (req, res, next) => {
    Project.getAllProjects()
    .then(projects => {
        res.json(projects)
    })
    .catch(next)
})



router.post('/', validateProject(), async (req, res, next) => {
    try{
        await db.addProject(req.body);
        return res.status(201).json(req.body);
    } catch(error){
        next(error)
    }
})

router.get('/:id/tasks', validateProjectId(), async (req, res, next) => {
    try{
        const tasks = await db.getProjectTasks(req.params.id);
        return res.status(200).json(tasks);
    } catch(error) {
        next(error)
    }
})

router.post('/:id/tasks', validateTask(), validateProjectId(), async (req, res, next) => {
    try{
        await db.addTask(req.body)
        return res.status(201).json(req.body);
    } catch(error) {
        next(error)
    }
})

module.exports = router;