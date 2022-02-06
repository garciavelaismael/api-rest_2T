import { Persona } from "./persona";
export class Empleado extends Persona {
  protected _puesto: string;
  constructor(
    id: string,
    nombre: string,
    direccion: { calle: string; numero: number },
    telefono: number,
    email: string,
    password: string,
    fechanacimiento: Date,
    puesto: string,
    socio: boolean
  ) {
    super(id, nombre, direccion, telefono, email, password, fechanacimiento, socio);
    this._puesto = puesto;
  }
  get puesto() {
    return this._puesto;
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
