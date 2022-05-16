
const UserModel = require('../models/user.model')

// get all user list
exports.getUserList = (req,res)=>{
    UserModel.getAllUsers(
        (err, users)=>{
            if(err){
                res.send(err);
            }
            else{
                console.log("users" , users)
                res.send(users)
            }
        })
}

// get user by id 

exports.getUserById =(req, res)=>{
    UserModel.getUserById(
        req.params.id , (err,user)=>{
            if(err){
                res.send(err);
            }
            else{
                console.log("single user  data" , user)
                res.send(user);
            }
        }
    )
}


// create user

exports.createUser =(req, res)=>{
    const userData = new UserModel(req.body);
    if(req.body.contructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success : false , message : 'please fill all filds'})
    }
    else{
        console.log("chintan",userData)
        UserModel.createUser(userData , (err, user)=>{
            if(err){
                res.send(err)
            }
            else{
                res.json({message:'user created successfully' , data : user})
            }
        })
    }
}

// update user 
exports.updateUser =(req, res)=>{
    const userData = new UserModel(req.body);
    if(req.body.contructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success : false , message : 'please fill all filds'})
    }
    else{
        UserModel.updateUser(req.params.id,userData , (err, user)=>{
            if(err){
                res.send(err)
            }
            else{
                res.json({message:'user update successfully' , data : user.insertId})
            }
        })
    }
}

// delete user
exports.deleteUser = (req , res)=>{
    UserModel.deleteUser(req.params.id , (err , user)=>{
        if(err){
            res.send(err)
        }
        else{
            res.json({success:true , message:"user delete successfully"})
        }
    })
}
