import { Producto } from "./producto/producto";

export class Compra {

    protected _id: string;
    protected _idCliente: string;
    protected _coste: number;
    protected _idProducto: string;

    constructor(id: string, idCliente: string, coste: number, idProducto: string) {
      this._id = id;
      this._idCliente = idCliente;
      this._coste = coste;
      this._idProducto = idProducto;
    }

    get getId() {
      return this._id;
    }
    get getCliente() {
      return this._idCliente;
    }
    get getProductos() {
      return this._idProducto;
    }

    
  
    todoCompra() {
      return `ID: ${this._id}, 
        : nombreCliente: ${this._idCliente}, 
        coste: ${this._coste},
        productos:  ${this._idProducto}`;
    }
  }
  