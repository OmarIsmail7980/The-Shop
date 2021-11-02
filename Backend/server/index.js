const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 8080;


app.listen(PORT, ()=>{
    console.log("listening on port %d",PORT)
})