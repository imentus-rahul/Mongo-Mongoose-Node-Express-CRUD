// get list of all products == fn getOne
// get list of one product == fn getAll
// post save one product == fn saveOne

import { productModel } from "../models/productModel.js";
import {
    saveOneService,
    getOneService,
    getAllService,
    updateOneService,
    deleteOneService
} from "../services/productService.js"

async function saveOne(request, response) {
    const product = new productModel(request.body); // mongo db create query
    console.log("🚀 ~ file: productController.js:41 ~ saveOne ~ product", product);
    let { name, price, weight, category } = product;
    let returnobj = await saveOneService(name, price, weight, category);
    console.log("🚀 ~ file: productController.js:13 ~ saveOne ~ returnobj", returnobj);

    if (returnobj.resolve != null) {
        let product = returnobj.resolve;
        response.status(201).json({
            message: "Saved item to DB",
            data: product
        });
    }
    else {
        response.status(500).send(returnobj.reject);
    }
}

async function getOne(request, response) {
    let id = request.params.id;
    let returnobj = await getOneService(id);
    console.log("🚀 ~ file: productController.js:30 ~ getOne ~ returnobj", returnobj);

    if (returnobj.resolve != null) {
        let product = returnobj.resolve;
        response.status(201).json({
            message: "Found an item",
            data: product
        });
    }
    else {
        response.status(500).send(returnobj.reject);
    }
}

async function getAll(request, response) {
    let returnobj = await getAllService();
    console.log("🚀 ~ file: productController.js:49 ~ getAll ~ returnobj", returnobj);

    if (returnobj.resolve != null) {
        let product = returnobj.resolve;
        response.status(201).json({
            message: "Found items",
            data: product
        });
    }
    else {
        response.status(500).send(returnobj.reject);
    }
}

async function updateOne(request, response) {
    const product = new productModel(request.body); // mongo db create query
    console.log("🚀 ~ file: productController.js:62 ~ updateOne ~ product", product);
    let { name, price, weight, category } = product;
    let id = request.params.id;
    let returnobj = await updateOneService(name, price, weight, category, id);
    console.log("🚀 ~ file: productController.js:13 ~ saveOne ~ returnobj", returnobj);

    if (returnobj.resolve != null) {
        let product = returnobj.resolve;
        response.status(201).json({
            message: "Updated item to DB",
            data: product
        });
    }
    else {
        response.status(500).send(returnobj.reject);
    }
}

async function deleteOne(request, response) {

    const product = await productModel.findByIdAndDelete(request.params.id);
    let id = request.params.id;
    let returnobj = await deleteOneService(id);
    console.log("🚀 ~ file: productController.js:91 ~ deleteOne ~ returnobj", returnobj);

    if (returnobj.resolve != null || (returnobj.resolve == null && returnobj.reject == null)) {
        let product = returnobj.resolve;
        response.status(201).json({
            message: "Item Deleted from DB",
            data: product
        });
    }
    else {
        response.status(500).send(returnobj.reject);
    }

    // if (!product) response.status(404).send("No item found");

}

export default {
    saveOne,
    getOne,
    getAll,
    updateOne,
    deleteOne
}