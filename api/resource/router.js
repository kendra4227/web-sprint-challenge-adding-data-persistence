const express = require("express");
const db = require("../models/resourceModel");
const router = express.Router();
const {validateResource} = require("../middleware/resourceMiddleware");

router.get('/', async (req, res, next) => {
   try{
    const resources = await db.getResources();
    return res.status(200).json(resources);
   } catch(error) {
       next(error)
   }
})

router.post('/', validateResource(), async (req, res, next) => {
    try{
        await db.addResource(req.body)
        return res.status(201).json(req.body)
    } catch(error) {
        next(error)
    }
})

module.exports = router;