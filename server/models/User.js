import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    celular: {
        type: Number,
        required: true,
        unique: true,
    },
});

export default mongoose.model("User", UserSchema);