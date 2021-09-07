let classModel = require("../model/class.model");
const ObjectId = require('mongoose').Types.ObjectId;

let getAllClassDetails = (request,response)=> {
    
    classModel.find({},(err,data)=> {
        if(!err){
            response.json(data);
        }else {
             response.json(err);   
        }
    })

}


let storedClassInfo = (request,response)=> {
    let classes = request.body;

    classModel.insertMany(classes,(err,result)=> {
        if(!err){
                response.send("Record stored successfully")
        }else {
                response.send(err);
        }
    })
}


let deleteClassInfo = (request,response)=> {
    let pid = Number(request.params.pid);
    classModel.deleteOne({_id:pid},(err,result)=> {
        if(!err){
            response.send("successfuly deleted")
        }else {
            console.error(err)
            response.send("failed to delete");
        }
    })
}

let updateClassDetails = (request,response)=> {
    let classes = request.body;
    classModel.updateOne({_id:classes._id},{$set:{price:classes.price}},(err,result)=> {
        if(!err){
            response.send(result);
        }else {
            response.send(err);
        }
    })
}

module.exports= {getAllClassDetails,storedClassInfo,deleteClassInfo,updateClassDetails  }