export class Persona {
  protected _id: string;
  protected _nombre: string;
  protected _direccion: { calle: string; numero: number };
  protected _telefono: number;
  protected _email: string;
  constructor(
    id: string,
    nombre: string,
    direccion: { calle: string; numero: number },
    telefono: number,
    email: string,
  ) {
    this._id = id;
    this._nombre = nombre;
    this._direccion = direccion;
    this._telefono = telefono;
    this._email = email;
  }
  get id() {
    return this._id;
  }
  get nombre() {
    return this._nombre;
  }
  get direccion() {
    return this._direccion;
  }
  get telefono() {
    return this._telefono;
  }
  get email() {
    return this._email;
  }

  todo() {
    return `ID: ${this._id}, 
    Nombre: ${this._nombre}, 
    Direccion: ${this._direccion}, 
    Telefono: ${this._telefono}, 
    Email : ${this._email}`;
  }
}
