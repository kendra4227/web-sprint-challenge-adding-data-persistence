const projects = require("../api/project/model");

function validateProjectId() {
    return async (req, res, next) => {
        try{
            const project = await projects.getProjectById(req.params.id);
            if(project) {
                req.project = project
                next()
            } else {
                return res.status(404).json({
                    errorMessage: "Invalid project id"
                })
            }
        } catch (error) {
            next(error);
        }
    }
}

function validateProject() {
    return (req, res, next) => {
        if(Object.keys(req.body).length === 0) {
            return res.status(400).json({
                errorMessage: "Please fill the required fields"
            })
        } else if(!req.body.name) {
            return res.status(400).json({
                errorMessage: "Please fill the name field"
            })
        } else {
            next();
        }
    }
}

function validateTask() {
    return (req, res, next) => {
        if(Object.keys(req.body).length === 0) {
            return res.status(400).json({
                errorMessage: "Please fill the required fields"
            })
        } else if(!req.body.description) {
            return res.status(400).json({
                errorMessage: "Please fill the description field"
            })
        } else {
            next();
        }
    }
}

module.exports = {
    validateProject,
    validateProjectId,
    validateTask
}