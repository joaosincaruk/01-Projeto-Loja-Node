import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();



app.get("/products", (req, res) => {
    
})

console.log(process.env.MONGO_URI) 


app.listen(5000, () => {
    console.log("Servidor iniciado com sucesso em http://localhost:5000")
})

// vQoOuwrB9O8ExzrD