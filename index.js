const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;


// middlewares
app.use(cors());
app.use(express.json());


app.get("/", (req,res)=>{
    res.send("News Wave Server Is Running Prefectly");
})
app.listen(port);