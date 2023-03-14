const mongoose = require("mongoose");

const connect = async ()=>{
    return await mongoose.connect("mongodb+srv://nitesh:samaniya@cluster0.fsv9b7i.mongodb.net/Agumentic");
}

module.exports = connect;