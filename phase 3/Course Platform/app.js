let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let cors = require("cors");
let routerClass = require("./router/class.router");



// create the reference of express 
let app = express();

// add middleware 
app.use(cors());
app.use(bodyParser.json())

//url database 
let url = "mongodb://localhost:27017/classDb"

// connect the database 
mongoose.connect(url).then(res=>console.log("connected")).catch(error=>console.log(error));

app.get("/",(request,response)=>{
    response.sendFile(__dirname+"/home.html")
})
app.use(express.static('Html'))



app.use("/api/class",routerClass);
// app.use("/api/order",routerOrder);
// app.use("/api/login",routerLogin);
app.listen(9090,()=>console.log("Server running on port number 9090"))
