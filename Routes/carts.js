const express = require('express');
const router = express.Router();
const cartsRepo = require('../Repositories/carts');
const productsRepo = require('../Repositories/products');
const cartShowTemplate = require('../Views/carts/show');

//receive post request to add an item to a cart
router.post('/cart/products', async (req, res) => {
    //Figure out the cart
    let cart;
    if (!req.session.cartId) {
        //Dont have a cart, need to create one
        cart = await cartsRepo.create({ items: [] });
        //store the cart id on the req.session.cartId property
        req.session.cartId = cart.id;
    } else {
        //We have a cart, get it from the repository
        cart = await cartsRepo.getOne(req.session.cartId);
    }
    const existingItem = cart.items.find(
        item => item.id === req.body.productId
    );
    if (existingItem) {
        //increment quantity
        existingItem.quantity++;
    } else {
        //add new product to items array
        cart.items.push({ id: req.body.productId, quantity: 1});
    }
    await cartsRepo.update(cart.id, {
        items: cart.items
    });
    res.redirect('/cart');
});
//Receive get request to show all items in cart

router.get('/cart', async (req,res) => {
    if(!req.session.cartId) {
        return res.redirect('/');
    }
    const cart = await cartsRepo.getOne(req.session.cartId);
    if (!cart) {
        return res.redirect('/');
        
    }
    for( let item of cart.items) {
        const product = await productsRepo.getOne(item.id);
        item.product = product;
    }
    res.send(cartShowTemplate({items: cart.items }))
});

//receive a post request to delete an item from a cart
router.post('/cart/products/delete', async (req,res) => {
    const {itemId} = req.body;
    const cart = await cartsRepo.getOne(req.session.cartId);
    const items = cart.items.filter(item => item.id !== itemId);

    await cartsRepo.update(req.session.cartId, {items});
    res.redirect('/cart');
});
module.exports = router;