import express from 'express';
import productManager from './productManager.js'
import fs from 'fs';
const cartsRouter = express.Router();


cartsRouter.get('/cid', (req, res)=>{
  const limit = req.query.limit;
  let arrayProductos = productManager.getProducts();
  if(limit){
      let products= arrayProductos.slice(0, parseInt(limit));
      return res.send(products)
  }else{
     return res.send({ arrayProductos })
  }
  
});
cartsRouter.post('/', (req, res)=> {
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

  if(!id){
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



 

export default cartsRouter;