const express=require("express");
const bodyParser=require("body-parser");
//const request=require("request");

const app=express();
app.use(express.static("public"));
app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
})
app.use(bodyParser.urlencoded({extended:true}));
app.listen(3000 || process.env.PORT,function(){
  console.log("Server started");
})
