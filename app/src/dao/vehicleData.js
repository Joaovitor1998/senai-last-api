const VehicleData = require('../models/vehicleData');

const API = {};


API.findAll = () => {
    return VehicleData.findAll();
}  


API.findById = (id) => {
    const condition = {
        where: {
            id: id
        }
    }

    return VehicleData.findOne(condition);
}


API.create = (vehicleData) => {
    return VehicleData.create(vehicleData);
}


module.exports = API;