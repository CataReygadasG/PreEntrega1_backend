import express from 'express';
import productManager from '../productManager.js'
import fs from 'fs';

const productsRouter = express.Router();

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
productsRouter.get('/products/:pid', (req, res)=>{
  const pid = parseInt(req.params.pid);
  let arrayProduct = productManager.getProductById(pid);
  if(arrayProduct){
     return res.send({arrayProduct});
  }else{
      return res.send({error: "Producto no encontrado"}) } 
  });

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

 productsRouter.put('/:pid', (req,res)=>{
  const pid = parseInt(req.params.pid);
  const product = req.body;
  let arrayProduct = productManager.updateProduct(pid, product);
  if(arrayProduct){
     return res.send({arrayProduct});
  }else{
      return res.send({error: "Producto actualizado"}) 
    } 
  });


productsRouter.delete('/:pid', (req,res)=>{
  const pid = parseInt(req.params.pid);
  let arrayProduct =  productManager.updateProduct(pid, updateProduct);
  if(arrayProduct){
     return res.send({arrayProduct, error: "Producto eliminado"});
  }else{
     return res.send({error: "El producto no se eliminado"}) 
    } 
  
});

export default productsRouter;