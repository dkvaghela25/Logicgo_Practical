const product = require("../../database/models/product")

const getProducts = async (req, res) => {
    try {
        const { category } = req.query;
        const products = category ? await product.find({ category }) : await product.find();
        console.log('Products: ', products)
        res.status(200).json({ success: true, message: 'Products fetched succesfully', products: products })
    } catch (err) {
        console.log("Error fetching products ", err)
    }
}

const addProduct = async (req, res) => {
    try {
        const { name, price, category } = req.body;
        const newProduct = new product({ name, price, category });
        await newProduct.save();
        res.status(200).json({success: true, message: 'Product added succesfully', product: newProduct});
    } catch (err) {
        console.log("Error ading new product ", err)
    }
}

module.exports = {
    getProducts,
    addProduct
}