const add = require("fs");
add.readFile("manu.js","utf-8",function(error,data)
{   if (error) console.log(error);
    else console.log(data); 
});
//console.log(ans);add.writeFileSync("copy.txt"," ans");
 //add.appendFileSync("copy.txt", "\n\n\n\nhello manaswini");//does not ovveride the content   
//add.mkdirSync("myfolder");//create a folder
//add.rmdirSync("myfolder");//delete a folder
//add.unlinkSync("copy.txt");//delete a file