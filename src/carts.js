import express from 'express';

import cartsRouter from './routes/cart.js'

const carts = express();
const puerto = 8080;

carts.use(express.json())
carts.use('/products/:cid',cartsRouter)
carts.use('/cid',cartsRouter)


carts.listen("8080", ()=>{
    console.log("servidor activo");
});
