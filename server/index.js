/* eslint-disable */
import express from 'express';
import mongoose from 'mongoose';
import crudRoutes from './routes/rCrud.js';
import dotenv from 'dotenv';

const app = express();

dotenv.config();

const connect = () => {
    mongoose
        .connect(process.env.MONGO)
        .then(() => {
            console.log('Connected to DB');
        })
        .catch((err) => {
            throw err;
        });
};

// MIDDLEWARE SECTION:
app.use(express.json());
app.use('/api/crud', crudRoutes);
app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || 'Something went wrong!';
    return res.status(status).json({
        success: false,
        status,
        message,
    });
});

app.listen("https://crud-mern-stack-api.vercel.app/", () => {
    connect();
    console.log('Connected to server!');
});
