import express from 'express';

const app = express();

const products = [
    {id:"1", title:"Anillo de diamante", description:"Anillo de oro con diamante",  price:1200000, thumbnail: ".img/1.jpg" ,code: "ABBB001" ,stock:12},
    {id:"2", title:"Anillo brillantes", description:"Anillo con brilllantes con plata", price:70000, thumbnail:".img/2.jpg" ,code: "ABBB002" ,stock:20},
    {id:"3", title:"Arete original", description:"Arete de oro con forma original",  price:500000, thumbnail:  ".img/arete.jpg",code: "ABBB005",stock:15}
];


app.get('/products', (req, res)=>{
    res.send({products});
});
app.get('/:pid', (req, res)=>{
    let idProducts = req.params.pid;//leyendo el paramentro de la url
    let product = products.find(u => u.id === idProducts);//me buscar algo en un array
    if(!product){ return res.send({error: "Usuario no encontrado"}) } 
    res.send({product})
});

app.listen("8080", ()=>{
    console.log("servidor activo");
});
