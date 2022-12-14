const DAO = require('../dao/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();

const { verifyUserByGivenType, generateToken } = require('../utils/userServiceUtils');
const { SALT_OR_ROUNDS } = process.env;

const SERVICES = {

    signIn: async (req, res) => {

        const userLogin = req.body; // Username & Password
        
        const user = await verifyUserByGivenType(userLogin.username, DAO);

        if (user !== null) {

            bcrypt.compare(userLogin.password, user.password, (error, result) => {

                if (result) {

                    const secret = req.app.get('secret');
                    const token = generateToken(user, secret, jwt);

                    res.set('x-access-token', token);

                    return res.status(200).json('Authentication succeeded.');
                } else {
                    res.status(400).json('Please, verify your credentials.');
                }

            });

        } else {
            res.status(400).json("User does not exists!");
        }
    },


    signUp: async (req, res) => {

        const user = req.body;
        console.log(user)

        bcrypt.hash(user.password, 10, (error, result) => {

            user.password = result;
            
            DAO.signup(user);

            res.status(201).json("User created successfully!");
        });

    },


    isUserTaken: async (req, res) => {

        const user = req.params.user;
        const isTaken = await verifyUserByGivenType(user, DAO);

        if (isTaken !== null) {
            return res.status(200).json(true);
        }

        res.status(200).json(false);
    }
};

module.exports = SERVICES;