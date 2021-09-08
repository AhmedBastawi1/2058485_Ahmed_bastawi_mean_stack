let express = require("express")    //load the express module
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let cors = require("cors");
let routerChat= require("./router/chat.router");
const { request, response } = require("express");

let app = express();    //create the reference of express module

app.use(cors());
app.use(bodyParser.json())

let ws = require("express-ws")(app);
let url = "mongodb://localhost:27017/tcsmean"
mongoose.connect(url).then(res=>console.log("connected")).catch(error=>console.log(error));

app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/index.html");
})
app.use("/api/chat",routerChat);
app.ws("/", (socket,request)=>{     
    console.log("Client Connected");

    socket.on("message", msg=>{  
        console.log("Client say: "+ msg);
        socket.send(Date());
    })

    socket.send("Server: You're successfully connected");       
})
app.listen(9090, ()=>console.log("Server running on port 9090"));