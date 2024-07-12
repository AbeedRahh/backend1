//importing express
//require intalleed expressind eimportine chyan require use chyum
var express=require("express");
//intialization step 
var app=express();



//middleware



//api
//app.get('url',(req,res)=>{})
    app.get("/",(req,res)=>{
        res.send("hello world");
    })



//port assining 
app.listen(3654,(req,res)=>{
    console.log("port is up and running");
}
)