import { Persona } from "./persona";
export class Empleado extends Persona {
  protected _puesto: string;
  protected _ventas: number;
  protected _horas: number;
  constructor(
    id: string,
    nombre: string,
    direccion: { calle: string; numero: number },
    telefono: number,
    email: string,
    puesto: string,
    ventas: number,
    horas: number,
  ) {
    super(id, nombre, direccion, telefono, email);
    this._puesto = puesto;
    this._ventas = ventas;
    this._horas = horas;
  }
  get puesto() {
    return this._puesto;
  }
  get ventas() {
    return this._ventas;
  }
  get salario(){
    return this._horas * 8
  }
}