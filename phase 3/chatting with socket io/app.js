let express= require("express");
let app= express();
let http=require("http").Server(app);
let io= require("socket.io")(http);

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"\\index.html")
})
app.get('/cssfile.css', function(req, res) {
  res.sendFile(__dirname + "/" + "cssfile.css");
});

io.on("connection", (socket)=>{
    console.log("client connected");
   
    socket.on("obj",(msg)=>{
        console.log(msg);
    })
    socket.emit("obj1","Hello Client Connected Server.......")
    socket.emit("clientObj",Date())
    socket.on("clientObj",(msg)=>{
        socket.emit("clientObj",Date())
        console.log("Client: "+msg);
        console.log("server: "+Date());
    })
})
http.listen(9090,()=>console.log("server running in port number 9090"))