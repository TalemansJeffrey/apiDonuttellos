const express = require('express');
const router = express.Router();
const donutController = require('../../../controllers/api/v1/donut');

router.post("/", donutController.create);
    
    router.get("/", donutController.getAll);

    module.exports = router;