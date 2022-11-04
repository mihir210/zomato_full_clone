import express from "express";
import dotenv from "dotenv";

dotenv.config();
import ConnectDB from "./database/connection";

const zomato = express();

zomato.use(express.json());


zomato.get('/', (req, res) => {
    res.json({
        message: "server is running",
    })
})


zomato.listen(4000, () => {
    //  ConnectDB().then(() => {
    //      console.log("server is running");
    //  }).catch((error) => {
    //      console.log("server is runnig,  but database connection is failed");
    //      console.log(error);
    //  })

    console.log("server is running");
});