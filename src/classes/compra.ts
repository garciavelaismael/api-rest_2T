import { Producto } from "./producto/producto";

export class Compra {

    protected _id: string;
    protected _idCliente: string;
    protected _coste: number;
    protected _idProducto: string;

    constructor(_id: string, _idCliente: string, _coste: number, _idProducto: string) {
      this._id = _id;
      this._idCliente = _idCliente;
      this._coste = _coste;
      this._idProducto = _idProducto;
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
  