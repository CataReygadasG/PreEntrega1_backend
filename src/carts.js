import express from 'express';
import bodyParser from  'body-parser';
import cartsRouter from './routes/carts.js'

const carts = express();
const puerto = 8080;

carts.use(express.json())
carts.use('/products/:cid',cartsRouter)
carts.use('/',cartsRouter)

carts.listen("8080", ()=>{
    console.log("servidor activo");
});