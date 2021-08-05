function addData() {
//This code create tags 
    var title = document.getElementById("title").value;
    var article = document.getElementById("article").value;
    var url = document.getElementById("imageURL1").value;
//alert validtion
    if (title.length == 0) {
        alert("The title is required.");
        return;
    }
    if (article.length == 0) {
        alert("The article is required.");
        return;
    }  if (url.length == 0) {
        alert("The url image is required.");
        return;
    }
// div
    var div = document.createElement("div"); 
    document.getElementById("info").appendChild(div);
    div.setAttribute("style","color:black;border:7px blue solid; display: inline-block; margin: 20px; word-wrap:break-word; background: silver; overflow-y: scroll; width:320px ;height: 250px"); 
//title
    var titlePTag = document.createElement("p");
    var titlePTagContent = document.createTextNode("   title is : "+title);
    titlePTag.appendChild(titlePTagContent);
    div.appendChild(titlePTag);
//image  
    var image = new Image();
    image.src = url;
    div.appendChild(image);
//article
    var articlePTag = document.createElement("p");
    var articlePTagContent = document.createTextNode("   article is : "+article);
    articlePTag.appendChild(articlePTagContent);
    div.appendChild(articlePTag);
    articlePTag.setAttribute("style", "color black");  
}




