const express = require('express');
const router = express.Router();
const donutController = require('../../../controllers/api/v1/donuts');
//get passport out of passport folder
const passport = require('../../../passport/passport');


router.post("/",donutController.createDonut);
    
router.get("/",donutController.getAll);

router.get("/:id",donutController.getOne);

router.delete("/:id", passport.authenticate('jwt', { session: false }),donutController.deleteOne);

router.put("/:id", passport.authenticate('jwt', { session: false }),donutController.updateStatus);

//update the status of the donut






module.exports = router;