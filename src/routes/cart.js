import express from 'express';
import fs from 'fs';
import cartManager from '../classes/cartManager.js';
const cartsRouter = express.Router();
//GET
  cartsRouter.get('/:cid', (req, res)=>{
    const pid = parseInt(req.params.pid);
    let arrayProduct = productManager.getProductById(pid);
    if(arrayProduct){
       return res.send({arrayProduct});
    }else{
        return res.send({error: "Producto no encontrado"}) } 
    });
  //POST
  productsRouter.post('/', (req, res)=> {
    let id = Date.now().toString();
    const {
      title,
      description,
      code,
      price,
      stock,
      category,
      thumbnail,
    } = req.body;
  
    if(!title || !description || !code || !price || !stock || !category ){
      return res.status(400).json({message: 'Todos los campos son obligatorios'});
    }
    const data = fs.readFileSync('productos.json', 'utf-8');
    const products = JSON.parse(data);
    const newProduct = {
      id: Date.now().toString(),
      title,
      description,
      code,
      price,
      status: true,
      stock,
      category,
      thumbnail  
    }
    products.push(newProduct);
    fs.writeFileSync('productos.json', JSON.stringify(products, null, 2),'utf-8');
    res.status(200).json(newProduct);
   });
  

   const products = [];
   //POST
   cartsRouter.post('/:cid/product/:pid', (req, res)=>{
       let producto = req.body;
       if(!producto.id){
           return res.status(400).send({status: "error", error: "datos incompletos"});
       }
       products.push(producto);
       res.status(200).send({status:"sucess", message: "producto creado"});
       console.log(products);
   });
   
  
export default cartsRouter;