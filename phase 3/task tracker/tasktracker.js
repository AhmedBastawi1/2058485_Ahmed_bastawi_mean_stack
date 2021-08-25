let fs= require("fs")
let tasks = JSON.parse(fs.readFileSync("task.json").toString());
let http = require("http");
let url = require("url");
let addtask=`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="cssfile.css">
    <title>Task Tracker</title>
</head>
<body>
    <div class="container">
        <div class="row justify-content-center">
       <h1>Task Planner</h1><br/><br/>
        </div>
        <h2 >Task Add</h2><br/>
        <form class="form-group" action="register">
        <div class="row">
               <div class="col-2"><label>Emp Id: </label></div>
        <div  class="col-3"><input type="text" name="empid" class="form-control" /></div>
        </div>
        <div class="row">
            <div class="col-2"><label>Task Id: </label></div>
            <div class="col-3"><input type="text" name="taskid" class="form-control"/></div>
        </div>
        <div class="row">
            <div class="col-2"><label>Task:</label></div>
             <div class="col-3"><input type="text" name="task" class="form-control"/></div>
        </div>
        <div class="row">
            <div class="col-2"><label>Deadline:</label></div>
            <div class="col-3"><input type="date" name="dateline" class="form-control"/></div>
        </div><br/><br/>

        <div class="row">
            <div class="col-2"><input type="submit" value="Add Task" class="btn btn-outline-warning" /></div>
        </div>
        </form>
        <hr/>
</body>
</html>`
let deletetask=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="cssfile.css">
    <title>Task Tracker</title>
</head>
<body>
        <h2 >Delete Task</h2><br/>
        <form class="form-group" action="delete">
        
        <div class="row">
            <div class="col-2"><label>Task Id :</label></div>
            <div class="col-3"><input type="text"  name="taskid" class="form-control"/></div>
        </div><br/>

        <div class="row">
            <div class="col-2"><input type="submit" value="Delete Task" class="btn btn-outline-warning" /></div>
        </div>
        </form>
         <hr/>
         </body>
         </html>`

let table=` <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="cssfile.css">
    <title>Task Tracker</title>
</head>
<body>
<h2 >List All Task</h2><br/>
<form class="form-group" action="table">
<div class="row">
<div class="col-2"><input type="submit" value="Show Task" class="btn btn-outline-warning" /></div>
</div>
</form>
</body>
</html>`
let hidetable=` <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="cssfile.css">
    <title>Task Tracker</title>
</head>
<body>
<h2 >List All Task</h2><br/>
<form class="form-group" action="hidetable">
<div class="row">
<div class="col-2"><input type="submit" value="Hide Task" class="btn btn-outline-warning" /></div>
</div>
</form>
</body>
</html>`
let server = http.createServer((request,response)=> {
let urlInfo = url.parse(request.url,true);
    if(urlInfo.path != "/favicon.ico"){
     if(urlInfo.pathname == "/register"){
         let Task = urlInfo.query;
         let result = tasks.find(l=>l.taskid == Task.taskid);
        response.writeHead(200,{"content-type":"text/html"});
            if(result == undefined){
            let data = {empid:Task.empid,taskid:Task.taskid,task:Task.task,dateline:Task.dateline};
            tasks.push(data);
            let taskString = JSON.stringify(tasks);
            fs.writeFileSync("task.json",taskString);
            // alert("Data stored in file");
            response.write(addtask)
            response.write(deletetask);
            response.write(table);  
            }else{
            response.write("Task Id Must Be Unique")
            response.write(addtask)
            response.write(deletetask);  
            response.write(table);
            }
        }else if(urlInfo.pathname == "/delete"){
            let Task = urlInfo.query;
            let result = tasks.find(l=>l.taskid == Task.taskid);
           response.writeHead(200,{"content-type":"text/html"});
               if(result != undefined){
               const index = tasks.findIndex(x => x.taskid === Task.taskid);
               if (index !== undefined) tasks.splice(index, 1);
                let taskString = JSON.stringify(tasks);
                fs.writeFileSync("task.json",taskString);
                response.write(addtask)
                response.write(deletetask);  
                response.write(table);
            }else{
            response.write("Task Id not Exist")
            response.write(addtask)
            response.write(deletetask);  
            response.write(table);
            }
        }else if(urlInfo.pathname == "/table"){
            let tableStart = "<table border=1><tr><th>Employee ID</th><th>Task ID</th><th>Task Name</th><th>Deadline</th></tr>";
            let tableData = "";
            for (let task of tasks) {
                tableData += "<tr><td>"+task.empid+"</td><td>"+task.taskid+"</td><td>"+task.task+"</td><td>"+task.dateline+"</td></tr>";
            }
            response.write(addtask);  
            response.write(deletetask);  
            response.write(hidetable);
            response.write(tableStart+tableData+"</table>");
        }else if(urlInfo.pathname == "/hidetable"){
            response.write(addtask);  
            response.write(deletetask);  
            response.write(table); 
        }else{
    response.write(addtask);  
    response.write(deletetask);  
    response.write(table);
}
}
    response.end();
})
server.listen(9090,()=>console.log("Server running on port number 9090"))