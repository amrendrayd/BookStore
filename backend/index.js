import express from "express";
import mongoose from "mongoose";
import cors from "cors";
// import { MONGOURI } from "./config.JS";
import bookRoute from "./router/book.router.js"


const app = express();

app.use(express.json())

app.use(cors(
    {
        origin: 'http://localhost:3000',
        methods: ['GET','POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type']
    }
))

const MONGOURI = 'mongodb+srv://amrendrayd:cN8siOTZpNPOJswi@cluster0.dcphunc.mongodb.net'

app.get('/user', (req, res) => {
    res.send("Server is running")
})

app.use('/books', bookRoute)

mongoose
    .connect(MONGOURI)
    .then(() => {
        app.listen(6001, () => {
            console.log(`App is listning on port: 6001`);    
        });
    })
    .catch((error) => {
        console.log(error);
        
    })