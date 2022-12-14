var express = require('express');
var router = express.Router();
const authController = require('../controllers/auth');

/* GET users listing. */
//router.get('/', authController.getInfo);

router.post('/signup', authController.signup);  
router.post('/login', authController.login); 
router.put('/update', authController.changePassword);




module.exports = router;

