import fs from 'fs';

class CartManager {
  constructor() {
    this.products = []; //inicializo con array vacio
    this.cartsId = 1;
    this.path = 'cart.json';
  }
  addCart(title, description, price, thumbnail, code, stock) {
    const productExistente = this.products.find((product) => product.code === code);
    if (productExistente) {
      console.log("Error");
    } else {
      const newProduct = {
        id: this.productId++,
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
      };
      this.products.push(newProduct); //push: agregando al array vacio
      fs.writeFileSync(this.path, JSON.stringify(this.products, null, 2), "utf-8");
    }
  }
  getCart = () => {
   // const products = fs.readFileSync(this.path, "utf-8");
   // return JSON.parse(products);
   // console.log(products);
   try{
    return JSON.parse(fs.readFileSync(this.path, "utf-8")) || [];
   }catch(error){
    return[];

   }
  }
 

  getCartById = (id) => {
    const ExisteId = JSON.parse(fs.readFileSync(this.path, "utf-8")).find((product) => product.id === id);
    if (ExisteId) {
      return ExisteId;
    } else {
      console.log("Error");
    }
    
}


  //Borrar
  deleteCarrito = (id) => {
    const newCarrito = JSON.parse(fs.readFileSync(this.path, "utf-8")).filter((item)=> item.id !== id);
    if(newCarrito){
      fs.unlinkSync(this.path);
      newCarrito.sort((a, b)=> a.id - b.id);
      fs.writeFileSync(this.path, JSON.stringify(newCarrito, null, 2));
      return newCarrito;
    }else{
      console.log("Error no existe el id");
    }
    
  }
  //Actualización, debe recibir el id del producto al actualizar
  updateCarrito = (id, update) => {
    let products = JSON.parse(fs.readFileSync(this.path, "utf-8"));
    const productoEncontrado = products.find(item => item.id === id);
    if(productoEncontrado){
      const productoActualizado = {
        id:id,
        ...update
      };
      const indiceProducto = products.indexOf(productoEncontrado);
      products[indiceProducto] = productoActualizado;
      fs.writeFileSync(this.path, JSON.stringify(products, null, 2));
    }else{
      console.log("error: no se contro producto con el id especifico");
    }
  };

  };


  const cartManager = new CartManager();
  export default cartManager;