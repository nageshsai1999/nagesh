var dbConn = require('../../config/db.config');

var MenuDetails = function(menuDetails){
    this.md_name = menuDetails.md_name;
    this.md_category = menuDetails.md_category;
    this.md_price = menuDetails.md_price;
    this.ud_contactno = menuDetails.ud_contactno;
    this.md_rating = menuDetails.md_rating;
    this.ud_updated_stamp = menuDetails.ud_updated_stamp;
    this.md_tag = menuDetails.md_tag;
    this.md_wishlist = menuDetails.md_wishlist;
    this.md_imgurl = menuDetails.md_imgurl;
}

// get all item data
MenuDetails.getAllItems = (result)=>{
    dbConn.query(`select * from menudetails` , (err , res)=>{
        if(err){
            console.log("Error while fetching menu" , err);
            result(null , err);
        }else{
            console.log("menu fatch successfully " , res);
            result(null , res);
        }
    })
}


// get Item by id 

MenuDetails.getItemById = (id , result)=>{
    dbConn.query(`select * from menudetails WHERE md_id=?`, id , (err , res)=>{
        if(err){
            console.log("Error while fetching menu by id " , err);
            result(null , err);
        }else{
            console.log("menu fatch successfully " , res);
            result(null , res);
        }
    })
}



// delete Item

MenuDetails.deleteItem =(id , result)=>{
    dbConn.query('DELETE FROM menudetails WHERE md_id=?' ,[id] , (err, res)=>{
        if(err){
            result(null , err)
        }
        else{
            result(null , res)
            console.log(res);
        }
    })
}




module.exports = MenuDetails