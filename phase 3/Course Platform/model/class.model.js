// load the module 
let mongoose = require("mongoose")



mongoose.pluralize(null);       // to avoid creating in lower case with s postfix. 
// create the schema 
let classSchema = mongoose.Schema({
     _id: Number,
   cname: String,
   cinfo: String, 
   price: Number
});

let classModel = mongoose.model("Course", classSchema);

module.exports=classModel;