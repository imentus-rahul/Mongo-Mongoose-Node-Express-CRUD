import express from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";
import { initdb } from './src/api/loaders/dbConnection.js';
import { productRoute } from "./src/api/routes/productRoute.js";

dotenv.config();

let app = express();

app.use(cors({ credentials: true, origin: `http://localhost:${process.env.PORT}` }));
// app.use(
//     cors({
//         origin: "*",
//     })
// );


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Put all routes below express.json()
app.get('/', (req, res) => {
    res.status(200).send("API is up and running!");
})
app.use('/product', productRoute)


app.listen(process.env.PORT, () => {
    return console.log(`Express is listening at http://localhost:${process.env.PORT}`);
});

// initdb(); // only imported file; not necessarily needed to be called