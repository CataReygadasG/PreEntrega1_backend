import express from 'express';
import productManager from '.productManager/'
const app = express();

app.get('/products', (req, res)=>{
    res.send({products});
});
app.get('/:pid', (req, res)=>{
    let idProducts = req.params.pid;//leyendo el paramentro de la url
    let product = products.find(u => u.id === idProducts);//me buscar algo en un array
    if(!product){ return res.send({error: "Usuario no encontrado"}) } 
    res.send({product})
});

app.listen("8080", ()=>{
    console.log("servidor activo");
});
