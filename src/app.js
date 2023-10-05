import express from 'express';
import bodyParser from  'body-parser';
import productsRouter from './routes/products.js'
import cartsRouter from './routes/cart.js'

const app = express();
const puerto = 8080;
app.use(express.json())
app.use('/api/products/',productsRouter)

app.use('/api/carts/',cartsRouter)

app.listen("8080", ()=>{
    console.log("servidor activo");
});