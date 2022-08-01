const Vehicle = require('../models/vehicle');

const API = {};

API.findAll = () => {
    return Vehicle.findAll();
}


API.findById = (id) => {
    const condition = {
        where: {
            id: id
        }
    }

    return Vehicle.findOne(condition);
}


API.create = (vehicle) => {
    return Vehicle.create(vehicle);
}

module.exports = API;