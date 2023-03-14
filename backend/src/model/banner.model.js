const { Schema, model } = require("mongoose");

const BannerSchema = new Schema({
    url: {
        type: String,
        required: true,
    }
},{
    timestamps: true,
    versionKey: false
});

const BannerModel = model("store", BannerSchema);

module.exports = BannerModel;