const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });
const productsEditTemplate = require('../../Views/admin/products/edit');
const productsNewTemplate = require('../../Views/admin/products/new');
const productsIndexTemplate = require('../../Views/admin/products/index');
const productsRepo = require('../../Repositories/products');
const {
    requireTitle,
    requirePrice,
    requireDescription,
    requireTag
} = require('./validators');
const {handleErrors, requireAuth} = require('./middlewares');

router.get('/admin/products', requireAuth, async (req, res) => {
    const products = await productsRepo.getAll();
    res.send(productsIndexTemplate({products}));
});

router.get('/admin/products/new', requireAuth, (req, res) => {
        res.send(productsNewTemplate({ req })); 
    }
);
router.post(
    '/admin/products/new',  
    requireAuth,   
    upload.single('image'), [
    requireTitle,
    requirePrice,
    requireDescription,
    requireTag
    ], 
    handleErrors(productsNewTemplate),
    async (req, res) => {
        const image = req.file.buffer.toString('base64');
        const {title, price, description, itemTag} = req.body;
        await productsRepo.create({ title, price, image, description, itemTag});
        res.redirect('/admin/products');
    }
);
router.get('/admin/products/:id/edit', requireAuth, async (req, res) => {
    const product = await productsRepo.getOne(req.params.id);
    if (!product) {
        return res.redirect('/admin/products');
    }
    res.send(productsEditTemplate({product}));
});
router.post(
    '/admin/products/:id/edit', 
    requireAuth, 
    upload.single('image'),
    [requireTitle,
    requirePrice,
    requireDescription,
    requireTag
    ],
    handleErrors(productsEditTemplate, async(req) => {
        const product = await productsRepo.getOne(req.params.id);
        return {product};
    }),
    async (req, res) => {
        const changes = req.body;
        if (req.file) {
            changes.image = req.file.buffer.toString('base64');
        }

        try {
            await productsRepo.update(req.params.id, changes);
        } catch (err) {
            return res.send('Could not find item');
        }

        res.redirect('/admin/products');
    }
);
router.post('/admin/products/:id/delete', requireAuth, async (req, res) => {
    await productsRepo.delete(req.params.id);
    res.redirect('/admin/products');
});

module.exports = router;