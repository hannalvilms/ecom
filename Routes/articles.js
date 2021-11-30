const express = require('express');
const router = express.Router();
const articlesRepo = require('../Repositories/articles');
const articlesIndexTemplate = require('../Views/articles/index');
const articleTemplate = require('../Views/articles/article');
router.get('/articles', async (req, res) => {
    const articles = await articlesRepo.getAll();
    res.send(articlesIndexTemplate({articles}));
});
router.get('/articles/:id', async (req, res) => {
    const article = await articlesRepo.getOne(req.params.id);
    if (!article) {
        return res.redirect('/articles');
    }
    res.send(articleTemplate({article}));
});
module.exports = router;