import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

export async function initdb() {

    // remove existing db, if available
    let db = mongoose.createConnection(process.env.DB_CONNECTION_STRING) ;
    await db.dropDatabase() ;
    await mongoose.disconnect();

    // initializing a new db
    if (mongoose.connection.readyState === 0) {
        mongoose.connect(process.env.DB_CONNECTION_STRING, () => {
            console.log('Connected with Mongo DB!');
        });
    }
}

initdb();