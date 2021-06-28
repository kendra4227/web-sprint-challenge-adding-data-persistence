function validateResource() {
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

module.exports = {
    validateResource
}