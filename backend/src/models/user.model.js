var dbConn = require('../../config/db.config');

var UserDetails = function(userDetails){
    this.ud_username = userDetails.ud_username;
    this.ud_email = userDetails.ud_email;
    this.ud_password = userDetails.ud_password;
    this.ud_contactno = userDetails.ud_contactno;
    this.ud_created_stamp = new Date();
    this.ud_updated_stamp = new Date();
}

// get all user
UserDetails.getAllUsers = (result)=>{
    dbConn.query(`select * from userDetails` , (err , res)=>{
        if(err){
            console.log("Error while fetching users" , err);
            result(null , err);
        }else{
            console.log("user fatch successfully " , res);
            result(null , res);
        }
    })
}

// get user by id 
UserDetails.getUserById = (id , result)=>{
    dbConn.query(`select * from userDetails WHERE ud_id=?`, id , (err , res)=>{
        if(err){
            console.log("Error while fetching user by id " , err);
            result(null , err);
        }else{
            console.log("user fatch successfully " , res);
            result(null , res);
        }
    })
}

// create user;

UserDetails.createUser = (userData , result)=>{
    console.log(userData)
    dbConn.query('INSERT INTO userDetails  SET ? ' , userData , (err , res)=>{
        if(err){
            console.log('error while inserting data');
            result(null , { status : false , message : err})
        }else{
            console.log('user created successfully');
            result(null , {status : true , message:'user  created successfully' , insertId : res.id})
        }
    })
}

// update user 

UserDetails.updateUser=(id , userData , result)=>{
    dbConn.query("UPDATE userDetails SET ud_username=? , ud_email = ? , ud_password = ? , ud_contactno = ?",[userData.ud_username ,userData.ud_email ,userData.ud_password, userData.ud_contactno , id ],
    (err , res)=>{
        if(err){
            result(null , err)
        }
        else{
            result(null , res)
            console.log(res);
        }
    });
}

// delete  user

UserDetails.deleteUser =(id , result)=>{
    dbConn.query('DELETE FROM userDetails WHERE ud_id=?' ,[id] , (err, res)=>{
        if(err){
            result(null , err)
        }
        else{
            result(null , res)
            console.log(res);
        }
    })
}




module.exports = UserDetails