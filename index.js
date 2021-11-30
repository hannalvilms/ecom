const express = require('express');
const cookieSession = require('cookie-session');
const authRouter = require('./Routes/admin/auth');
const app = express();
const productsAdminRouter = require('./Routes/admin/products');
const articlesAdminRouter = require('./Routes/admin/articles');
const productsRouter = require('./Routes/products');
const cartsRouter = require('./Routes/carts');
const frontRouter = require('./Routes/front');
const articlesRouter = require('./Routes/articles');

//to get the public folder and make it available
app.use(express.static('public'));
//to parse all route handlers automatically
app.use(express.urlencoded({extended: true}));
app.use(cookieSession({
        keys: ['hehehe']
    })
);

//Get route handlers from admin auth
app.use(authRouter);
app.use(productsRouter);
app.use(productsAdminRouter);
app.use(articlesAdminRouter);
app.use(cartsRouter);
app.use(frontRouter);
app.use(articlesRouter);

//localhost:3000
app.listen('hannalvilms.github.io/ecom/', () => {
    console.log('Listening');
});