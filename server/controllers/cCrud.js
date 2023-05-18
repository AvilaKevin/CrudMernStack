import mongoose from "mongoose";
import User from "../models/User.js"
import { createError } from "../error.js";


// CREATE USER
export const createUser = async (req, res, next) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(200).send("User has been created!");
    } catch (err) {
        next(err);
    };
};


// DELETE USER
export const deleteUser = async (req, res, next) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).send("User deleted");
    } catch (err) {
        next(err);
    };
};


// GET USERS
export const getUsers = async (req, res, next) => {
    try {
        const dbUsers = await User.find({});
        res.status(200).json(dbUsers);
    } catch (err) {
        next(err);
    };
};


// UPDATE USER
export const updateUser = async (req, res, next) => {
    const userId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(userId)) {
        return next(createError(400, "Invalid user id"));
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { $set: req.body },
            { new: true }
        );
        if (!updatedUser) {
            return next(createError(404, "User not found"));
        }

        res.status(200).json(updatedUser);
    } catch (err) {
        next(err);
    };
};


// FIND INTO DB
export const search = async (req, res, next) => {
    const query = req.query.q;
    try {
        const customers = await User.find({
            $or: [
                { name: { $regex: query, $options: "i" } },
                { email: { $regex: query, $options: "i" } },
                { number: { $regex: query } },
            ]
        });

        res.status(200).json(customers);
    } catch (err) {
        next(err);
    };
};


// GET USER
export const getUser = async (req, res, next) => {
    const id = req.params.id;

    try {
        const customer = await User.findById(id);

        res.status(200).json(customer);
    } catch (err) {
        next(err);
    };
};