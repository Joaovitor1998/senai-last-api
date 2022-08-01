const express = require('express'),
    app = express();
const cors = require('cors');

require('dotenv').config();

const { SECRET } = process.env;

const isLoggedIn = require('../middleware/authMiddleware.js');
const usersRouting = require('../routes/user'),
    vehiclesRouting = require('../routes/vehicle'),
    vehiclesDataRouting = require('../routes/vehicleData');

const corsOptions = {
    exposedHeaders: ['x-access-token']
};


app.use(cors(corsOptions));
app.set('secret', SECRET);


// ROUTING
app.use('/users', usersRouting);
app.use('/vehicles', isLoggedIn, vehiclesRouting);
app.use('/vehiclesData', isLoggedIn, vehiclesDataRouting);


// ROUTE DOESN'T EXISTS
app.use('*', (req, res) => {
    const JSON = {
        message: `Route ${req.originalUrl} doesn't exists!`
    }
    res
        .status(404)
        .json(JSON);
})


// ROUTING ERROR
app.use( (err, req, res, next) => {
    const JSON = {
        message: "Internal server error."
    };

    console.error(err.stack);
    res
        .status(500)
        .json(JSON);
});

module.exports = app;