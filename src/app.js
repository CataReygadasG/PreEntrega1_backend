import express from 'express';
import bodyParser from  'body-parser';
import productsRouter from './routes/products.js'
//import cartsRouter from './routes/carts.js'

const app = express();
const puerto = 8080;
app.use(express.json())
app.use('/products',productsRouter)
app.use('/products/:pid',productsRouter)
app.use('/',productsRouter)
app.listen("8080", ()=>{
    console.log("servidor activo");
});