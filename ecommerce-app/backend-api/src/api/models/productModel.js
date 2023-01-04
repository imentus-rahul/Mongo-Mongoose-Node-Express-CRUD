import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    weight: Number,
    category: String,
})

export const productModel = mongoose.model('productModel', productSchema);
