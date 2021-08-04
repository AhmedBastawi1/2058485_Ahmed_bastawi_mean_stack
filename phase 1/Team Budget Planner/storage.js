function storeData(ClientName,ProjectName,Budget) {
    if(Budget==""||ClientName ==""|| Budget== ""){
alert("Please complete the form");
    }
    else{
    var locobject = JSON.parse(localStorage.getItem("locobject") || "[]");
    var obj = {CName:ClientName,PName:ProjectName,Bud:Budget};
     locobject.push(obj);
     localStorage.setItem("locobject", JSON.stringify(locobject));
    console.log("Data store in local storage")
        }
    }
function displayData() {
    // localStorage.removeItem("locobject");
    var locobject = JSON.parse(localStorage.getItem("locobject") || "[]");
    var tableContent = "";
    var startTable = "<table border=2><tr><th>Client Name</th><th>Project Name</th><th>Budget</th></tr>";
    var endTable = "</table>"; 
    locobject.forEach(title => {tableContent += "<tr><td>"+title.CName+"</td><td>"+title.PName+"</td><td>"+(title.Bud)+"</td></tr>";});
    tableContent = (startTable + tableContent + endTable) 
    document.getElementById("main").innerHTML=tableContent;
    var currencyF = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'});
    var Tot = 0;
    locobject.forEach(title => {
        tableContent += "<tr><td>"+title.CName+"</td><td>"+title.PName+"</td><td>"+currencyF.format(title.Bud)+"</td></tr>";
        Tot = + Tot + +title.Bud;
    });
    var last= ("<br/>The total budget of all the projects = ");
    document.getElementById("last").innerHTML=last+Tot;
    tableContent = (top + tableContent + bottom) 
    + "<br><label>Total cost: " + currencyF.format(Tot) + "</label><br><br><a href=\"HomePage.html\">Back</a>";
}

    

