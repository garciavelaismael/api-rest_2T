import { Producto } from "./producto";

export class Liquido extends Producto {

  protected _sabor: string;
  protected _nicotina: number;

  constructor(
    id: string,
    nombreProd: string,
    marca: string,
    sabor: string,
    nicotina: number,
    coste: number
  ) {
    super(id, nombreProd, marca, coste);
    
    this._sabor = sabor;
    this._nicotina = nicotina;
  }
  get sabor() {
    return this._sabor;
  }
  get nicotina() {
    return this._nicotina;
  }
}
