import express from 'express'
export let productRoute = express.Router();

import productController  from "../controllers/productController.js";

productRoute.post('/save', productController.saveOne);
productRoute.get('/:id', productController.getOne);
productRoute.get('/products', productController.getAll);
productRoute.get('/delete/:id', productController.deleteOne);
productRoute.post('/update/:id', productController.updateOne);