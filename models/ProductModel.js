const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    productTitle: {
        type: String,
    },
    productName: {
        type: String,
        required: true,//
    },
    productInfo: {
        type: String,
    },
    productPrice: {
        type: Number,
        required: true,//
    },
    productRank: {
        type: String,
    },
    productImage: {
        type: String,
    },
    productCategory: {
        type: String,
    },
});

module.exports = Product = mongoose.model("product", ProductSchema);
