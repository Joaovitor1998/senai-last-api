const User = require("./user");
const Role = require("./role");
const db = require("../configs/database");
const Sequelize = require("sequelize");

const UserRoles = db.define("tb_user_role", {
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

User.belongsToMany(Role, { through: UserRoles });
Role.belongsToMany(User, { through: UserRoles });

module.exports = UserRoles;