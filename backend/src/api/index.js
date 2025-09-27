const express = require('express');
const { productRoute } = require('./router/product');

const apiRoute = express.Router();

apiRoute.use('/product',productRoute);

module.exports = {
    apiRoute
}