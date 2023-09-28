import express from 'express';
import productManager from '../productManager.js'
const productsRouter = express.Router();

productsRouter.get('/products', (req, res)=>{
  const limit = req.query.limit;
  let arrayProductos = productManager.getProducts();
  if(limit){
      let products= arrayProductos.slice(0, parseInt(limit));
      return res.send(products)
  }else{
     return res.send({ arrayProductos })
  }
  
});
productsRouter.get('/products/:pid', (req, res)=>{
  const pid = parseInt(req.params.pid);
  let arrayProduct = productManager.getProductById(pid);
  if(arrayProduct){
     return res.send({arrayProduct});
  }else{
      return res.send({error: "Producto no encontrado"}) } 
  });
const products = [];

productsRouter.post('/', (req, res)=>{
    const newProducto = req.body;
    products.push(newProducto);
    res.status(201).json(newProducto)
    
});

export default productsRouter;