import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Product from "./models/product.model.js";

dotenv.config();

const app = express();



app.post("/products", async (req, res) => {
    const Product = req.body
    if (!Product.nome || !Product.preço || !Product.image){
        return res.status(400).json({ success:false, message: "Por favor preencha todos os campos" })
    }
    const newProduct = new Product(product)
 try{
    await newProduct.save()
    res.status(201).json({ success: true, data: newProduct})
 }catch(error){
    console.error("Erro na criação do produto")
    res.status(500)
 }
})



app.listen(5000, () => {
    connectDB()
})

// vQoOuwrB9O8ExzrD