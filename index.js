const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const morgan = require("morgan");
const port = 3000;


const productsController = require("./controllers/indexController");
const connect = require("./config/connect")
const productRoute = require("./routes/indexRoute");

app.use(express.json());
app.use(bodyParser.json({limit:"50mb"}));
app.use(cors());
app.use(morgan("common"));
connect(app);
app.use(express.urlencoded({ extended: true }));


app.get("/api",(req,res)=>{
  res.status(200).json("hello")
});

app.use("/v1",productRoute);


app.listen(port,(req,res)=>{
  console.log(`Port ${port}`);
})