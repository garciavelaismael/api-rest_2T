import { Producto } from "../producto/producto";
import { Persona } from "./persona";
export class Cliente extends Persona {
  protected _carrito: Array<Producto>;
  constructor(
    id: string,
    nombre: string,
    direccion: { calle: string; numero: number },
    telefono: number,
    email: string,
    password: string,
    fechanacimiento: Date,
    socio: boolean,
    carrito: Array<Producto>
  ) {
    super(id, nombre, direccion, telefono, email, password, fechanacimiento, socio);
    this._carrito = carrito;
  }
  get carrito() {
    return this._carrito;
  }

  agregarProducto(producto: Producto) {
    this._carrito.push(producto)
  }

  buscarProducto(id: string): Producto | undefined {
    for (const producto of this._carrito) {
      if(producto.id === id) {
        return producto;
      }
    }
  }

  limpiarCarrito() {
    this._carrito.length = 0;
  }

  eliminarProducto(producto: Producto) {
    this._carrito.splice(this._carrito.indexOf(producto), 1);
    console.log("Se ha eliminado el producto!");
    
  }
}
