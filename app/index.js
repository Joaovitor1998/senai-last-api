const database = require('./src/config/database');
const UserRole = require('./src/models/userRole');
const app = require('./src/config/express');

require('dotenv').config();

const { PORT } = process.env || 8080;

async function startServer() {

    try {

        await database.authenticate();

        await database.sync();

        console.log("Database connection established successfully.");

        app.listen( PORT, () => console.log(`Server is listening on port ${PORT}`) );

    } catch( error ) {
        console.log("Unable to connect to database: ", error.stack);
    }
}

startServer();