let readline= require("readline-sync");
let fs= require("fs")
let Information = JSON.parse(fs.readFileSync("data.json").toString());

let Id = readline.questionInt("Enter your ID ");
let Name = readline.question("Enter Name ");
let Age = readline.questionInt("Enter your Age ");
debugger;
let Salary = readline.questionFloat("Enter your Salary ");
let Email = readline.questionEMail("Enter your Email ");
let data = {id:Id,name:Name,age:Age,salary:Salary,email:Email,date:new Date()};
Information.push(data);
debugger;
let InformationString = JSON.stringify(Information);
fs.writeFileSync("data.json",InformationString);
console.log("Data stored in file")





