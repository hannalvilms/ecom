const express = require('express');
const router = express.Router();
const productsRepo = require('../Repositories/products');
const productsIndexTemplate = require('../Views/products/index')
const productTemplate = require('../Views/products/product');
router.get('/products', async (req, res) => {
    const products = await productsRepo.getAll();
    res.send(productsIndexTemplate({products}));
});
router.get('/products/:id', async (req, res) => {
    const product = await productsRepo.getOne(req.params.id);
    if (!product) {
        return res.redirect('/products');
    }
    res.send(productTemplate({product}));
});
module.exports = router;