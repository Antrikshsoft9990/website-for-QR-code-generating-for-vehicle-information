const express =require("express");
const path = require("path");
const app = express();
require("./db/conn");
const coll=require("./models/register")
const static_path=path.join(_dirname,"../public");
app.use(express.static(static_path));
const port = process.env.PORT || 5500;
 app.get("/",(req,res)=>{
    res.send("connecting..");
 });
 app.listen(port,()=>{
    console.log(`server is running at port ${port}`);
 })