import { Persona } from "./persona";
export class Cliente extends Persona {
  protected _socio: boolean;
  constructor(
    id: string,
    nombre: string,
    direccion: { calle: string; numero: number },
    telefono: number,
    email: string,
    socio: boolean,
  ) {
    super(id, nombre, direccion, telefono, email);
    this._socio = socio;
  }
  get socio() {
    return this._socio;
  }
}

