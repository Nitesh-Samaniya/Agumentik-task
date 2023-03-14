require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyparser = require("body-parser");

const connect = require("./config/db");
const PORT = process.env.PORT || 8080;

const BannerRoute = require("./route/banner.route")

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

mongoose.set("strictQuery", false);

app.use("/banner", BannerRoute);

app.get("/", (req,res)=> {
    res.send("Agumentic Task");
})

app.listen(PORT, async()=>{
    connect();
    console.log(`listening at port http://localhost:${PORT}`);
})