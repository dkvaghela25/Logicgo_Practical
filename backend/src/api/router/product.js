const express = require('express');
const { getProducts, addProduct } = require('../controller/product');

const productRoute = express.Router();

productRoute.get('/', getProducts);
productRoute.post('/', addProduct);

module.exports = {
    productRoute
}