const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });
const articlesEditTemplate = require('../../Views/admin/articles/edit');
const articlesNewTemplate = require('../../Views/admin/articles/new');
const articlesIndexTemplate = require('../../Views/admin/articles/index');
const articlesRepo = require('../../Repositories/articles');
const {
    requireTitle
} = require('./validators');
const {handleErrors, requireAuth} = require('./middlewares');

router.get('/admin/articles', requireAuth, async (req, res) => {
    const articles = await articlesRepo.getAll();
    res.send(articlesIndexTemplate({articles}));
});

router.get('/admin/articles/new', requireAuth, (req, res) => {
        res.send(articlesNewTemplate({ req })); 
    }
);
router.post(
    '/admin/articles/new',  
    requireAuth,   
    upload.single('image'), [
    requireTitle
    ], 
    handleErrors(articlesNewTemplate),
    async (req, res) => {
        const image = req.file.buffer.toString('base64');
        const {title, content} = req.body;
        await articlesRepo.create({ title, content, image });
        res.redirect('/admin/articles');
    }
);
router.get('/admin/articles/:id/edit', requireAuth, async (req, res) => {
    const article = await articlesRepo.getOne(req.params.id);
    if (!article) {
        return res.redirect('/admin/articles');
    }
    res.send(articlesEditTemplate({article}));
});
router.post(
    '/admin/articles/:id/edit', 
    requireAuth, 
    upload.single('image'),
    [requireTitle],
    handleErrors(articlesEditTemplate, async(req) => {
        const article = await articlesRepo.getOne(req.params.id);
        return {article};
    }),
    async (req, res) => {
        const changes = req.body;
        if (req.file) {
            changes.image = req.file.buffer.toString('base64');
        }

        try {
            await articlesRepo.update(req.params.id, changes);
        } catch (err) {
            return res.send('Could not find item');
        }

        res.redirect('/admin/articles');
    }
);
router.post('/admin/articles/:id/delete', requireAuth, async (req, res) => {
    await articlesRepo.delete(req.params.id);
    res.redirect('/admin/articles');
});

module.exports = router;