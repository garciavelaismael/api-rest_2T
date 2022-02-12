import { Persona } from "./persona";
export class Empleado extends Persona {
  protected _ventas: number;
  protected _horas: number;
  constructor(
    id: string,
    nombre: string,
    direccion: { calle: string; numero: number },
    telefono: number,
    email: string,
    ventas: number,
    horas: number,
  ) {
    super(id, nombre, direccion, telefono, email);
    this._ventas = ventas;
    this._horas = horas;
  }
  get ventas() {
    return this._ventas;
  }
  
  salario(): number {
    let salario: number;
    let base: number = this._horas * 8;
    if (this._ventas > 5) {
      salario = base * 1.02
    } else if (this._ventas > 10) {
      salario = base * 1.03
    } else if (this._ventas > 20) {
      salario = base * 1.05
    } else {
      salario = base
    }
    return Math.round(salario)
  }
}