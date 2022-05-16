const ItemModel = require('../model/manu.model')

// get all Item list
exports.getItemList = (req,res)=>{
    ItemModel.getAllItems(
        (err, items)=>{
            if(err){
                res.send(err);
            }
            else{
                res.send(items)
            }
        })
}

// get item by id 
exports.getItemById =(req, res)=>{
    ItemModel.getItemById(
        req.params.id , (err,item)=>{
            if(err){
                res.send(err);
            }
            else{
                console.log("single item  data" , item)
                res.send(item);
            }
        }
    )
}


// delete item by id 
exports.deleteItem = (req , res)=>{
    ItemModel.deleteItem(req.params.id , (err , user)=>{
        if(err){
            res.send(err)
        }
        else{
            res.json({success:true , message:"item delete successfully"})
        }
    })
}
