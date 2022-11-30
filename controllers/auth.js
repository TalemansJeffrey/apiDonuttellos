const User = require('../models/User');
const passsport = require('../passport/passport');

const signup = async (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    const user = new User({username: username});

    await user.setPassword(password);
    await user.save().then(result => {
        res.json({
            "status": "success",
            "data": {
                "user": result
            }
        })
    }).catch(err => {

        res.json({
            "status": "error"
        })

    });




};

const login = async (req, res, next) => {


    const user = await User.authenticate()(req.body.username, req.body.password).then (result => {
        console.log(result);
        res.json({
            "status": "success",
            "data": {
                "user": result
            }
        })
        
    } ).catch(error => {
        res.json({
            "status": "error",
            "message": error

            })
            });
            






}










module.exports.signup = signup;
module.exports.login = login;