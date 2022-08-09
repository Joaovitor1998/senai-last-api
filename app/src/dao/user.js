const User = require('../models/user');
const Role = require('../models/role');
const UserRoles = require('../models/userRole');

const API = {};

API.findByEmail = (email) => {
    const condition = {
        where: {
            email: email
        },
        include: Role
    }

    return User.findOne(condition);
}  

API.findByUsername = (username) => {
    const condition = {
        where: {
            username: username
        },
        include: Role
    }

    return User.findOne(condition);
}

API.signInWithEmail = (user) => {
    const condition = {
        where: {
            email: user.email,
            password: user.password
        }
    }

    return User.findOne(condition);
}

API.signInWithUsername = (user) => {
    const condition = {
        where: {
            username: user.username,
            password: user.password
        }
    }

    return User.findOne(condition);
}

API.signup = async (user) => {
    const newUser = await User.create(user);
    await UserRoles.create({
        UserId: newUser.id,
        RoleId: 2 // USER
    });
}

module.exports = API;