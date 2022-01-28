const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Data").then((data)=>{
    console.log("Server is conneted to db");
}).catch((err)=>{
    console.log("No connction");
});