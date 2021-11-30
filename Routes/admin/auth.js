const express = require('express');
const usersRepo = require('../../Repositories/users');
const signupTemplate = require('../../Views/admin/auth/signup');
const signinTemplate = require('../../Views/admin/auth/signin');
const router = express.Router();
const {
    requireEmail, 
    requirePass, 
    requirePassConf,
    checkEmail,
    checkPassword
} = require('./validators');
const {handleErrors} = require('./middlewares');

router.get('/signup', (req, res) => {
    res.send(signupTemplate({ req })); 
 });
 
 router.post(
    '/signup', 
    [requireEmail, requirePass, requirePassConf], 
    handleErrors(signupTemplate),
    async (req, res) => {
        const {email, password} = req.body;
        //Create a user in our user repo to represent this person
        const user = await usersRepo.create({email, password});
        //Store the id of that user inside the users cookie
        req.session.userId = user.id;
    
        res.redirect('/admin/products');
    }
);
 
 router.get('/signout', (req, res) => {
     req.session = null;
     res.redirect('/signin');
 });
 
 router.get('/signin', (req, res) => {
    res.send(signinTemplate({}));
 });
 
 router.post(
     '/signin',
     [
         checkEmail,
         checkPassword
     ],
     handleErrors(signinTemplate),
     async (req, res) => {
        const {email} = req.body;
        const user = await usersRepo.getOneBy({email})
        //Store the id of that user inside the users cookie
        req.session.userId = user.id;
        res.redirect('/admin/products');
    }
 );

 module.exports = router;