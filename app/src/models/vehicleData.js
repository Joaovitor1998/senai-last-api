const Sequelize = require("sequelize");
const db = require("../configs/database");


module.exports = db.define("tb_vehicle_data", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    vinCode: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    odometer: {
        type: Sequelize.STRING,
        allowNull: false
    },
    tirePressure: {
        type: Sequelize.STRING,
        allowNull: false
    },
    vehicleStatus: {
        type: Sequelize.STRING,
        allowNull: false
    },
    batteryStatus: {
        type: Sequelize.STRING,
        allowNull: false
    },
    fuelLevel: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lat: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lon: {
        type: Sequelize.STRING,
        allowNull: false
    },
    createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('now')
    },
    updatedAt: {
        type: Sequelize.DATE,
        allowNull: true,
    }
}, {
    timestamps: false
});