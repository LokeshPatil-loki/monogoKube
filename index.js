const express = require("express");
const app = express();
const mongoose = require("mongoose");
const URI = "mongodb://my-release-mongodb:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.0"
let isConnected = false;

app.get("/", () => {
    console.log(isConnected ? "connected" : "Not connected")
})

mongoose.connect(URI).then(() => {
    console.log("Connected");
    app.listen(3032);
    isConnected = true;
}).catch(err => {
    console.log(err.message);
})
