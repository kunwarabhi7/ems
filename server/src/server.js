import 'dotenv/config'
import app from './app.js'
import  { connectToDB } from './config/database.js';
import {sequelize} from './models/index.js'

const PORT = process.env.PORT || 5000;

const startServer = async () => {
    try {
        await connectToDB();
        await sequelize.sync();

        app.listen(PORT, () => {
            console.log(`Server running on PORT ${PORT}`);
        });

    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}


startServer()