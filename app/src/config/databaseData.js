const UserRole = require('../models/userRole');
const { QueryTypes } = require('sequelize');
const bcrypt = require('bcrypt');

function createUsers(database) {
    database.query(`INSERT INTO tb_user (username, email, password) VALUES (?,?,?);`,
        {
            type: QueryTypes.INSERT,
            replacements: [
                'admin',
                'admin@senai.com',
                bcrypt.hashSync('admin1234', 10)
            ]
        });

    database.query(`INSERT INTO tb_user (username, email, password) VALUES (?,?,?);`,
        {
            type: QueryTypes.INSERT,
            replacements: [
                'joao',
                'joao@senai.com',
                bcrypt.hashSync('joao1234', 10)
            ]
        });
}

function createRoles(database) {
    database.query(`INSERT INTO tb_role (roleName) VALUES (?);`,
        {
            type: QueryTypes.INSERT,
            replacements: [
                'ADMIN'
            ]
        });

    database.query(`INSERT INTO tb_role (roleName) VALUES (?);`,
        {
            type: QueryTypes.INSERT,
            replacements: [
                'USER'
            ]
        });
}

function setUserRoles(database) {
    database.query(`INSERT INTO tb_user_role (UserId, RoleId) VALUES (?,?);`,
        {
            type: QueryTypes.INSERT,
            replacements: [
                1,
                1
            ]
        });

    database.query(`INSERT INTO tb_user_role (UserId, RoleId) VALUES (?,?);`,
        {
            type: QueryTypes.INSERT,
            replacements: [
                1,
                2
            ]
        });

    database.query(`INSERT INTO tb_user_role (UserId, RoleId) VALUES (?,?);`,
        {
            type: QueryTypes.INSERT,
            replacements: [
                2,
                2
            ]
        });

}

function createVehicles(database) {
    database.query(`INSERT INTO tb_vehicle (model, totalVolume, connected, softwareUpdates) VALUES (?,?,?, ?);`,
    {
        type: QueryTypes.INSERT,
        replacements: [
            'Ranger',
            145760,
            70000,
            27550
        ]
    });

    database.query(`INSERT INTO tb_vehicle (model, totalVolume, connected, softwareUpdates) VALUES (?,?,?, ?);`,
    {
        type: QueryTypes.INSERT,
        replacements: [
            'Mustang',
            1500,
            500,
            750
        ]
    });

    database.query(`INSERT INTO tb_vehicle (model, totalVolume, connected, softwareUpdates) VALUES (?,?,?, ?);`,
    {
        type: QueryTypes.INSERT,
        replacements: [
            'Territory',
            4560,
            4000,
            3050
        ]
    });

    database.query(`INSERT INTO tb_vehicle (model, totalVolume, connected, softwareUpdates) VALUES (?,?,?, ?);`,
    {
        type: QueryTypes.INSERT,
        replacements: [
            'Bronco Sport',
            7560,
            4060,
            2050
        ]
    });
}

function createVehiclesData(database) {
    database.query(`INSERT INTO tb_vehicle_data (vinCode, odometer, tirePressure, vehicleStatus, batteryStatus, lat, lon, fuelLevel) VALUES (?,?,?,?,?,?,?,?);`,
    {
        type: QueryTypes.INSERT,
        replacements: [
            'JS06GLCMWPD2L7DM9S1S',
            '23344',
            '36,36,35,34',
            'on',
            'Ok',
            '-12,2322',
            '-35,2314',
            '76'
        ]
    });

    database.query(`INSERT INTO tb_vehicle_data (vinCode, odometer, tirePressure, vehicleStatus, batteryStatus, lat, lon, fuelLevel) VALUES (?,?,?,?,?,?,?,?);`,
    {
        type: QueryTypes.INSERT,
        replacements: [
            '01LSOPC8GH4CL5J1H9C',
            '130000',
            '36,34,36,33',
            'off',
            'Recharge',
            '-12,2322',
            '-35,2314',
            '19'
        ]
    });

    database.query(`INSERT INTO tb_vehicle_data (vinCode, odometer, tirePressure, vehicleStatus, batteryStatus, lat, lon, fuelLevel) VALUES (?,?,?,?,?,?,?,?);`,
    {
        type: QueryTypes.INSERT,
        replacements: [
            'BC9C9M2HS9XVD5CJGWYU',
            '50000',
            '36,36,35,34',
            'on',
            'Ok',
            '-12,2322',
            '-35,2314',
            '90'
        ]
    });

    database.query(`INSERT INTO tb_vehicle_data (vinCode, odometer, tirePressure, vehicleStatus, batteryStatus, lat, lon, fuelLevel) VALUES (?,?,?,?,?,?,?,?);`,
    {
        type: QueryTypes.INSERT,
        replacements: [
            'APS9CKD835J6DD778XW',
            '10000',
            '36,34,36,33',
            'off',
            'Ok',
            '-12,2322',
            '-35,2314',
            '25'
        ]
    });
    
}

module.exports = (database) => {
    return database.sync({ force: true }).then( () => {

        createUsers(database);
        createRoles(database);
        setUserRoles(database);
        createVehicles(database);
        createVehiclesData(database);
    });
}