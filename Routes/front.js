const express = require('express');
const router = express.Router();
const productsRepo = require('../Repositories/products');
const articlesRepo = require('../Repositories/articles');
const frontTemplate = require('../Views/front')
router.get('/', async (req, res) => {
    const products = await productsRepo.getAll();
    const articles = await articlesRepo.getAll();
    res.send(frontTemplate({products, articles}));
});

module.exports = router;