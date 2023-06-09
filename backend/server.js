const express = require("express");
const app = express()

app.get("/",(req, res)=>{
    res.send({"HELLO":"World"})
})
app.get("/test",(req, res)=>{
    res.send({"Yash":"Giri"})
})

app.listen(3001,()=>{
    console.log("Server At Port 3001 Online 👍")
})