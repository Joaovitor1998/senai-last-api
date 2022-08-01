const Sequelize = require("sequelize");
const db = require("../config/database");

module.exports =  db.define("tb_vehicle", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    model: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    totalVolume: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    connected: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    softwareUpdates: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW')
    },
    updatedAt: {
        type: Sequelize.DATE,
        allowNull: true
    }
}, {
    timestamps: false
});