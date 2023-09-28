import express from "express";
import productManager from './productManager.js'
const app = express();
const server = app.listen(8080, ()=>console.log("servidor puerto: 8080"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
let user = [];
app.post('/', (req, res)=>{
    let producto = req.body;
    if(!producto.id){
        return res.status(400).send({status: "error", error: "datos incompletos"});
    }
    user.push(producto);
    res.status(200).send({status:"sucess", message: "usuario creado"});
    console.log(user);
});
server;
