import { productModel } from "../models/productModel.js";

export async function saveOneService(name, price, weight, category) {
    const product = new productModel({ name, price, weight, category });
    console.log("🚀 ~ file: productService.js:5 ~ saveOneService ~ product", product);
    try {
        await product.save();
        return { "resolve": product, "reject": null };
    } catch (error) {
        return { "resolve": null, "reject": error };
    }
}

export async function getOneService(id) {
    try {
        const product = await productModel.findOne({}); // mongo db read query // will return the first document
        return { "resolve": product, "reject": null };
    } catch (error) {
        return { "resolve": null, "reject": error };
    }
}

export async function getAllService() {
    try {
        const product = await productModel.find({}); // mongo db read query
        return { "resolve": product, "reject": null };
    } catch (error) {
        return { "resolve": null, "reject": error };
    }
}

export async function updateOneService(name, price, weight, category, id) {
    const product = new productModel({ name, price, weight, category }); // mongo db update query
    console.log("🚀 ~ file: productService.js:34 ~ updateOneService ~ product", product);
    try {
        // await productModel.findByIdAndUpdate(id, product); // codeName: 'ImmutableField' with product model
        await productModel.findByIdAndUpdate(id, { name, price, weight, category });
        return { "resolve": product, "reject": null };
    } catch (error) {
        return { "resolve": null, "reject": error };
    }
}

export async function deleteOneService(id) {
    try {
        const product = await productModel.findByIdAndDelete(id);
        console.log("🚀 ~ file: productService.js:47 ~ deleteOneService ~ product", product);
        return { "resolve": product, "reject": null };
    } catch (error) {
        return { "resolve": null, "reject": error };
    }
}

export default {
    saveOneService,
    getOneService,
    getAllService,
    updateOneService,
    deleteOneService
}