import { connect } from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

async function Connect() {
    await connect(process.env.MONGO_CONNECTION)
    .then(() => console.log('MongoDB connected'));
}


export default Connect;