const http = require("http");
const server = http.createServer((request, response)=>{
    response.end("Bienvenido a nuestra tienda!"); //finaliza la llamada
    console.log("consola")
});
server.listen("8080", ()=>{
    console.log("Servidor activo");
});
const express = require("express")
const app = express();
app.get("/saludo", (req, res)=> {
    res.send("Hola mundo desde express");
});
app.listen("8080", ()=>{
    console.log("servidor activo");
});