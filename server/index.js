const express = require("express");
const app = express();
const router = require("./router")
const cors = require("cors")

app.use(cors())
app.use("/api",router)

app.listen(7788,()=>{
    console.log("服务器运行在7788端口")
})