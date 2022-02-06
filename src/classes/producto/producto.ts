export class Producto {
  protected _id: string;
  protected _nombreProd: string;
  protected _marca: string;
  protected _coste: number;

  constructor(id: string, nombreProd: string, marca: string, coste: number) {
    this._id = id;
    this._nombreProd = nombreProd;
    this._marca = marca;
    this._coste = coste;
  }

  get id() {
    return this._id;
  }
  get nombreProd() {
    return this._nombreProd;
  }
  get marca() {
    return this._marca;
  }
  get coste() {
    return this._coste;
  }

  todoProd() {
    return `ID: ${this._id}, 
      Nombre de producto: ${this._nombreProd}, 
      Marca: ${this._marca}
      coste ${this._coste}`;
  }
}
