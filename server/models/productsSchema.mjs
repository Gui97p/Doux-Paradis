import { Schema, model } from "mongoose";

const ProductsSchema = Schema({
    id: {
        type: Number,
        unique: true
    },
    name: {
        type: String
    },
    price: {
        type: Number
    },
    image: {
        type: String
    }
});

const ProductsModel = model('products', ProductsSchema);

export default {
    schema: ProductsSchema,
    model: ProductsModel
}
