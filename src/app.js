const express = require("express");

const app = express();

app.use("/Get", (req, res)=>{
    res.send("Hello From server -GET")
})

app.use("/test" , (req, res)=>{
    res.send("Hello From Server- Test")
})

app.listen(3000, ()=>{
    console.log("server running")
})