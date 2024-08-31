import express from "express";
import { PORT, MONGOURI } from "./config.js";
import mongoose from "mongoose";
import cors from "cors";
import bookRoute from "./router/book.router.js"


const app = express();

app.use(express.json())

app.use(cors());

// app.use(cors(
//     {
//         origin: 'http://localhost:3000',
//         methods: ['GET','POST', 'PUT', 'DELETE'],
//         allowedHeaders: ['Content-Type']
//     }
// ))

// const MONGOURI = 'mongodb+srv://amrendrayd:cN8siOTZpNPOJswi@cluster0.dcphunc.mongodb.net'

app.get('/user', (req, res) => {
    res.send("Server is running")
})

app.use('/books', bookRoute)

mongoose
    .connect(MONGOURI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`App is listning on port: ${PORT}`);    
        });
    })
    .catch((error) => {
        console.log(error);
        
    })