const Sequelize = require("sequelize");
const db = require("../config/database");

const Role = db.define("Role", {
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
    timestamps: false,
    freezeTableName: true,
    tableName: 'tb_role'
});


module.exports = Role;