import express from "express";

const atividadeApi = express();

atividadeApi.use(express.json());

var ultimoId = 1;
var usuarios = [];

atividadeApi.get("/usuarios", (req, res) => {
    res.send("Usuarios: ")

    res.status(200).json(usuarios)
})

atividadeApi.get("/rota/:id", (req, res) => {
    console.log("Você acessou a rota: ", req.params)
})

atividadeApi.post("/usuarios/cadastrar", (req, res) => {

    const { nome, email } = req.body;

    if(!nome || !email) {
        res.status(400).json( message = "Não deu certo pois não tem nome ou email")
        return;
    }

    const usuario = {
        id: ultimoId++,
        nome,
        email
    }
    usuarios.push(usuario)

    console.log("Usuario cadastrado: ")
    console.log(usuarios)

    
    console.log(usuarios)
    res.status(200).json(req.body)
})

atividadeApi.listen(3002);