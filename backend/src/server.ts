import express from 'express';
import { routes } from './routes';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/data-base",
{
 useNewUrlParser: true ,
 useUnifiedTopology: true ,
 useFindAndModify: false
});

const PORT = 3334;
app.use(cors())

app.use(routes)

app.listen((PORT), () => {
    console.log("🐺 server is running!");
    
})