const User = require('../models/User');
const jwt = require('jsonwebtoken'); //webtoken
const config = require('config'); //config


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

const login = async (req, res, next) => {


    let user = await User.authenticate()(req.body.username, req.body.password).then (result => {

        //console.log(result);

            if (!result.user) {
                return res.json({
                    "status": "failed",
                    "message": "Login failed"
                })
            }

            let token = jwt.sign({
                uid: result.user._id,
                username: result.user.username
            },process.env.secret || config.get('jwt.secret'));



        
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
    const updatePassword =  (req, res) => {

        
        //get the username out of the body
        let username = req.body.username;
        //find the user with the username
        User
        .findOne({username : username}). then (user => {
            //set the password
            user.setPassword(req.body.password).then(() => {
                //save the user
                user.save().then(result => {
                    res.json({
                        "status": "success",
                        "data": {
                            "user": result
                        }
                    })
                }).catch(err => {
                    res.json({
                        "status": "error",
                        "message": err
                    })
                })
            }).catch(err => {
                res.json({
                    "status": "error",
                    "message": err
                })
            })
        }).catch(err => {
            res.json({
                "status": "error",
                "message": err
            })
        }
     

        
    




        )
    };


        
        

        

        
    


















    
   
    












module.exports.signup = signup;
module.exports.login = login;
module.exports.updatePassword = updatePassword;
