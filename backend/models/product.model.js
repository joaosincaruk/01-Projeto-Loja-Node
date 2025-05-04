import mongoose from "mongoose";

// aqui cada produto vai ter um preço, um nome e imagem
const productSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true

    },
    preço: {
        type: Number,
        required: true        
    },

    image: {
        type: String,
        required: true
    },
},{
    timestamps: true
}) 

const Product = mongoose.model('Product', productSchema) // Cria uma coleção products no banco com base no schema que foi feito
export default Product

