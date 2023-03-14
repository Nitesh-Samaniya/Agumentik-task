require("dotenv").config();

const express = require("express");
const secrectToken = process.env.SECRECTTOKEN;
const BannerModel = require("../model/banner.model");

const app = express.Router();

//getting all products.
app.get("/", async (req,res)=> {
    try{
        const banner = await BannerModel.find();
        return res.status(200).send(banner);
    }catch(e){
        return res.status(404).send("Bad request...")
    }
})

app.patch("/", async(req,res)=> { // document ki object _id 
    const id = "64103aa97e473cf1864dc0b6";
    try{
        const afterUpdate = await BannerModel.findByIdAndUpdate(id, {$set: {url: req.body.url}}, {new: true});
        return res.status(200).send(afterUpdate);
    }catch(e){
        return res.status(401).send(e);
    }
})

module.exports = app;
