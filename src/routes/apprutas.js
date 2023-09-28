import express from 'express';
import productManager from './productManager.js'
const router = express.Router();
const carrito = [];
router.get('/', (req, res)=> {
    res.json(carrito)  
});
router.post('/', (req, res)=> {
  const newCarrito = req.body;
  products.push(newCarrito);
});
export default router;