const DAO = require('../dao/vehicleData');

const SERVICES = {};


SERVICES.findAll = async (req, res) => {

    const result = await DAO.findAll();

    res.status(200).json(result);
}


SERVICES.findById = async (req, res) => {

    const id = req.params.id;
    const result = await DAO.findById(id);

    if( result !== null ){
        return res.status(200).json(result);
    }

    res.status(404).json({
        message: `Vehicle Data with ID ${id} not found.`
    });
}


SERVICES.findCreate = async (req, res) => {

    const vehicleData = req.body;
    const result = await DAO.create(vehicleData);

    res.status(201).json({
        message: `Vehicle Data created successfully!`,
        result: result
    });
}

module.exports = SERVICES;