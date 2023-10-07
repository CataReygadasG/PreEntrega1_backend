import express from 'express';
import productManager from '../classes/productManager.js'
import fs from 'fs';

const productsRouter = express.Router();
//GET
productsRouter.get('/', (req, res)=>{
  const limit = req.query.limit;
  let arrayProductos = productManager.getProducts();
  if(limit){
      let products= arrayProductos.slice(0, parseInt(limit));
      return res.send(products)
  }else{
     return res.send({ arrayProductos })
  }
  
});
//GET
productsRouter.get('/:pid', (req, res)=>{
  const pid = parseInt(req.params.pid);
  let arrayProduct = productManager.getProductById(pid);
  if(arrayProduct){
     return res.send({arrayProduct});
  }else{
      return res.send({error: "Producto no encontrado"}) } 
  });
//POST
 productsRouter.post('/', (req, res)=> {
  let nuevoId = productManager.length > 0 ? productManager [productManager.length - 1].id + 1:1;
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
    id: nuevoId,
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
//PUT
 productsRouter.put('/:pid', (req,res)=>{
  const pid = parseInt(req.params.pid);
  const product = req.body;
  let arrayProduct = productManager.updateProduct(pid, product);
  if(arrayProduct){
     return res.send({arrayProduct});
  }else{
      return res.send({error: "Producto actualizado correctamente"}) 
    } 
  });

//DELETE
productsRouter.delete('/:pid', (req,res)=>{
  const pid = parseInt(req.params.pid);
  let arrayProduct =  productManager.deleteProduct(pid, deleteProduct);
  if(arrayProduct){
     return res.send({arrayProduct, error: "Producto eliminado"});
  }else{
     return res.send({error: "El productoha sido eliminado"}) 
    } 
  
});

export default productsRouter;