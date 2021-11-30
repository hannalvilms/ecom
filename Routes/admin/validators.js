const {check} = require('express-validator');
const usersRepo = require('../../Repositories/users');

module.exports = {
    requireEmail: check('email')
        .trim()
        .normalizeEmail()
        .isEmail()
        .withMessage('Must be valid email')
        .custom(async (email) => {
            const existingUser = await usersRepo.getOneBy({ email });
            if (existingUser) {
                throw new Error('E-mail has already been taken!');
            }
        }
    ),
    requirePass: check('password')
        .trim()
        .isLength({ min: 2, max: 20 })
        .withMessage('Must be between 2 and 20 characters'),
    requirePassConf: check('passwordConfirmation')
        .trim()
        .isLength({ min: 2, max: 20 })
        .withMessage('Must be between 2 and 20 characters')
        .custom(async (passwordConfirmation, {req}) => {
            if (req.body.password !== passwordConfirmation) {
                throw new Error('Passwords do not match');
            }
        }
    ),
    checkEmail: check('email')
        .trim()
        .normalizeEmail()
        .isEmail()
        .withMessage('Must provide a valid email')
        .custom(async (email) => {
            const user = await usersRepo.getOneBy({email})
            if (!user) {
                throw new Error('Email not found!');
            }
        }
    ),
    checkPassword: check('password')
        .trim()
        .custom(async (password, {req}) => {
            const user = await usersRepo.getOneBy({email : req.body.email})
            if (!user) {
                throw new Error('Invalid password')
            }
            const validPass = await usersRepo.comparePasswords(
                user.password,
                password
            )
            if (!validPass) {
                throw new Error('Invalid password');
            }
        }
    ),
    requireTitle: check('title')
        .trim()
        .isLength({min: 5, max: 50})
        .withMessage('Must be between 5 and 50 characters'),
    requirePrice: check('price')
        .trim()
        .toFloat()
        .isFloat({min:1})
        .withMessage('Must be a number greater than 1'),
    requireDescription: check('description')
        .trim()
        .isLength({min: 10, max: 1500})
        .withMessage('Must be between 50 and 1500 characters'),
    requireTag: check('itemTag')
        .trim()
        .isLength({min: 2, max: 25})
        .withMessage('Must be between 2 and 25 characters'),
};