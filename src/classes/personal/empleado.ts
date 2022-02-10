import { Persona } from "./persona";
export class Empleado extends Persona {
  protected _puesto: string;
  protected _ventas: number;
  constructor(
    id: string,
    nombre: string,
    direccion: { calle: string; numero: number },
    telefono: number,
    email: string,
    puesto: string,
    ventas: number
  ) {
    super(id, nombre, direccion, telefono, email);
    this._puesto = puesto;
    this._ventas = ventas;
  }
  get puesto() {
    return this._puesto;
  }
  get ventas() {
    return this._ventas;
  }

  get salario() {
    switch (this._puesto) {
      case "Vendedor":
        return 800;
      case "Comercial":
        return 900;
      case "Transporte":
        return 850;
    }
    return 0;
  }
  todo() {
    return `${super.todo()},\n    Salario: ${this.salario}, \n    Puesto: ${
      this.puesto
    }`;
  }
}
