const User = require("../model/user");
const bcrypt = require("bcrypt");

const signUp = (req, res)=>{

    bcrypt.hash(req.body.password,10)
    .then((hash)=>{
        const user = new User({
            email : req.body.email,
            password : req.body.password
        });
    
        user.save().then((result)=>{
            res.status(202).json({
                message : "User Created"
            });
        })
        .catch((err)=>{
            res.status(501).json({
                message : "Internal server error"
            });
        })
    });
    };

    

module.exports = (signUp); 