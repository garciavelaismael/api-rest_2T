import { Producto } from "./producto/producto";

export class Compra {

    protected _id: string;
    protected _nombreCliente: string;
    protected _coste: number;
    protected _productos: Array<Producto>;

    constructor(_id: string, _nombreCliente: string, _coste: number, _productos: Array<Producto>) {
      this._id = _id;
      this._nombreCliente = _nombreCliente;
      this._coste = _coste;
      this._productos = _productos;
    }

    get getId() {
      return this._id;
    }
    get getCliente() {
      return this._nombreCliente;
    }
    get getProductos() {
      return this._productos;
    }
  
    todoCompra() {
      return `ID: ${this._id}, 
        : nombreCliente: ${this._nombreCliente}, 
        coste: ${this._coste},
        productos:  ${this._productos}`;
    }
  }
  