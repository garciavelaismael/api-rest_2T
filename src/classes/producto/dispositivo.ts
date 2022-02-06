import { Producto } from "./producto";
export class Dispositivo extends Producto {
  protected _potencia: number;
  protected _bateria: number;

  constructor(
    id: string,
    nombreProd: string,
    marca: string,
    potencia: number,
    bateria: number,
    coste: number
  ) {
    super(id, nombreProd, marca, coste);

    this._potencia = potencia;
    this._bateria = bateria;
  }
  get potencia() {
    return this._potencia;
  }
  get bateria() {
    return this._bateria;
  }
}
