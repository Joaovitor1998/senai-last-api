const DAO = require('../dao/vehicle');

const INTERNAL_ERROR_MESSAGE = { message: "" };

const SERVICES = {

    findAll: async (req, res) => {

        const result = await DAO.findAll();

        res.status(200).json(result);
    },


    findById: async (req, res) => {

        const id = req.params.id;
        const result = await DAO.findById(id);

        if (result !== null) {
            return res.status(200).json(result);
        }

        res.status(404).json({
            message: `Vehicle with ID ${id} not found.`
        });
    },


    create: async (req, res) => {

        const vehicle = req.body;
        const result = await DAO.create(vehicle);

        res.status(201).json(result);

    }

};

module.exports = SERVICES;