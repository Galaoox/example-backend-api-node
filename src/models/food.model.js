import { model, Schema } from 'mongoose';

const FoodSechema = Schema({
    nombre: String,
    descripcion: String, 
    precio: Number,
    categoria: String
});

export default model('Food', FoodSechema);