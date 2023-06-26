/* eslint-disable */
import express from 'express';
import mongoose from 'mongoose';
import crudRoutes from './routes/rCrud.js';
import dotenv from 'dotenv';

const app = express();

dotenv.config();

const connect = () => {
    mongoose
        .connect("mongodb+srv://kevin:kevin@crud.vk8fxst.mongodb.net/test?retryWrites=true&w=majority")
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

app.listen("8800", () => {
    connect();
    console.log('Connected to server!');
});
