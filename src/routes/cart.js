import express from 'express';
import productManager from './productManager.js'
const cartsRouter = express.Router();

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
productsRouter.get('/:cid/products/:pid', (req, res)=>{
  const cid = parseInt(req.params.cid);
  let arrayProduct = productManager.getProductById(cid);
  if(arrayProduct){
     return res.send({arrayProduct});
  }else{
      return res.send({error: "Producto no encontrado"}) } 
  });

 productsRouter.post('/'), (req, res)=> {
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
  const data = fs.readFile('carito.json', 'utf-8');
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
  fs.writeFile('carrito.json', JSON.stringify(products, null, 2),'utf-8');
  res.status(200).json(newProduct);
 }

productsRouter.delete('/pid'), (req,res)=>{
  let id = req.params.id;
  let currentLenght = id.length;
  products = products.filter(producto=>producto.first_name!=name);
  if(products.length===currentLenght){
    return res.status(404).send({status:"error", message: "Producto no encontrado"})
  }
  res.send({status:"sucess", message: "Producto borrado"})
}

export default cartsRouter;