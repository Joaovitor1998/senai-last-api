const database = require('./src/config/database');
const app = require('./src/config/express');
const initializeDatabase = require('./src/config/databaseData');

require('dotenv').config();

const { PORT } = process.env || 8080;


async function startServer() {

    try {

        await database.authenticate();

        console.log("Database connection established successfully.");

        await initializeDatabase(database);

        console.log("Database synchronized.");

        app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));

    } catch (error) {
        console.log("Unable to connect to database: ", error.stack);
    }
}

startServer();