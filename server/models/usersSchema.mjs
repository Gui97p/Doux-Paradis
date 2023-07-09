import { Schema, model } from "mongoose";

const UserSchema = Schema({
    id: {
        type: Number,
        unique: true
    },
    name: {
        type: String
    },
    password: {
        type: String
    },
    email: {
        type: String
    },
    phone_number: {
        type: String
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
});

const UserModel = model('users', UserSchema);

export default {
    schema: UserSchema,
    model: UserModel
}
