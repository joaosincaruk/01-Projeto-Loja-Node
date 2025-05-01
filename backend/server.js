import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Servidor pronto!")
})

app.listen(5000, () => {
    console.log("Servidor iniciado com sucesso em http://localhost:5000")
})
