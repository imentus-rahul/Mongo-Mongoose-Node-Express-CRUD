// get list of all products == fn getOne
// get list of one product == fn getAll
// post save one product == fn saveOne

import { productModel } from "../models/productModel.js";

async function saveOne(request, response) {
    const product = new productModel(request.body); // mongo db create query
    console.log("🚀 ~ file: productController.js:41 ~ saveOne ~ product", product);

    try {
        await product.save();
        response.status(201).json({
            message: "Saved item to DB",
            data: product
        });
    } catch (error) {
        response.status(500).send(error);
    }
}

async function getOne(request, response) {

    const product = await productModel.findOne({}); // mongo db read query

    try {
        response.status(201).json({
            message: "Found an item",
            data: product
        });
    } catch (error) {
        response.status(500).send(error);
    }


}

async function getAll(request, response) {

    const product = await productModel.find({}); // mongo db read query

    try {
        response.status(201).json({
            message: "Found an item",
            data: product
        });
    } catch (error) {
        response.status(500).send(error);
    }


}

async function updateOne(request, response) {
    const product = new productModel(request.body); // mongo db update query
    console.log("🚀 ~ file: productController.js:41 ~ saveOne ~ product", product);

    try {
        await productModel.findByIdAndUpdate(request.params.id, request.body);
        response.status(201).json({
            message: "Updated item to DB",
            data: product
        });
    } catch (error) {
        response.status(500).send(error);
    }
}

async function deleteOne(request, response) {
    try {
        const product = await productModel.findByIdAndDelete(request.params.id);
        if (!product) response.status(404).send("No item found");

        response.status(201).json({
            message: "Item Deleted from DB",
            data: product
        });
    } catch (error) {
        response.status(500).send(error);
    }
}

export default {
    saveOne,
    getOne,
    getAll,
    updateOne,
    deleteOne
}