import express from "express";
import dotenv from "dotenv";

dotenv.config();
import ConnectDB from "./database/connection";
import Auth from './api/auth';
const zomato = express();

zomato.use(express.json());


zomato.get('/', (req, res) => {
    res.json({
        message: "server is running",
    })
})

// signin signup
zomato.use("/auth", Auth);





zomato.listen(4000, () => {
    ConnectDB().then(() => {
        console.log("server is running database is connected");
    }).catch((error) => {
        console.log("server is runnig,  but database connection is failed");
        console.log(error);
    })

    // console.log("server is running");
});