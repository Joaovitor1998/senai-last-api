const User = require("./user");
const Role = require("./role");
const db = require("../config/database");
const Sequelize = require("sequelize");

const UserRole = db.define("UserRole", {
    UserId: {
        type: Sequelize.INTEGER,
        unique: false,
        references: {
            model: User,
            key: 'id'
        },
    RoleId: {
        type: Sequelize.INTEGER,
        unique: false,
        references: {
            model: Role,
            key: 'id'
        },
    }}
}, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'tb_user_role'
});

User.belongsToMany(Role, { 
    through: UserRole, 
});

Role.belongsToMany(User, { 
    through: UserRole, 
});

module.exports = UserRole;