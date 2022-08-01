const Sequelize = require("sequelize");
const db = require("../configs/database");

const Roles = db.define("tb_role", {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    roleName: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
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

module.exports = Roles;