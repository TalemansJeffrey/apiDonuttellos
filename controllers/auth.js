const User = require('../models/User');
const jwt = require('jsonwebtoken'); //webtoken
/*
const signup = async (req, res) => {

    //token meegeven zodra je geresgisterd bent
    let username = req.body.username;
    let password = req.body.password;

    let user = new User({username: username});

    await user.setPassword(password);
    await user.save().then(result => {
        console.log(result.id);
        let token = jwt.sign({
        
            uid: result._id,
            username: result.username
            
        }, "DonutelloSecret");




        res.json({
            "status": "success",
            "data": {
                "token": token
            }
        })
    }).catch(err => {

        res.json({
            "status": "error"
        })

    });




};
*/
const login = async (req, res, next) => {


    const user = await User.authenticate()(req.body.username, req.body.password).then (result => {

        console.log(result);

            if (!result.user) {
                return res.json({
                    "status": "failed",
                    "message": "Login failed"
                })
            }

            let token = jwt.sign({
                uid: result.user._id,
                username: result.user.username
            }, "DonutelloSectet");

        
         return res.json({
            "status": "success",
            "data": {
                "token": token
            }
        })
        
    } ).catch(error => {
        res.json({
            "status": "error",
            "message": error

            })
            });
            
    };
    //if user is logged in and has a token, get the username and password from the token
    const getInfo = (req, res) => {

        let token = req.headers.authorization.split(' ')[1];
        let decoded = jwt.verify(token, "DonutelloSecret");

        res.json({
            "status": "success",
            "data": {
                "username": decoded.username,


            }
        })




    }












//module.exports.signup = signup;
module.exports.login = login;
module.exports.getInfo = getInfo;