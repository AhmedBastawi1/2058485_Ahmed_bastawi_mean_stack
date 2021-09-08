// load the model file  ie user-defined module like a import in ts file 
let chatModel = require("../model/chat.model");

let storedChat = (request,response)=> {
    let chat = request.body;

    chatModel.insertMany(chat,(err,result)=> {
        if(!err){
                response.send("Record stored successfully")
        }else {
                response.send(err);
        }
    })
}

module.exports= {storedChat}