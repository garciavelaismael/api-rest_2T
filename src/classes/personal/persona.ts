export class Persona {
  protected _id: string;
  protected _nombre: string;
  protected _direccion: { calle: string; numero: number };
  protected _telefono: number;
  protected _email: string;
  protected _password: string;
  protected _fechanacimiento: Date;
  protected _socio: boolean;
  constructor(
    id: string,
    nombre: string,
    direccion: { calle: string; numero: number },
    telefono: number,
    email: string,
    password: string,
    fechanacimiento: Date,
    socio: boolean
  ) {
    this._id = id;
    this._nombre = nombre;
    this._direccion = direccion;
    this._telefono = telefono;
    this._email = email;
    this._password = password;
    this._fechanacimiento = fechanacimiento;
    this._socio = socio;
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
  get password() {
    return this._password;
  }
  get fechanacimiento() {
    return this._fechanacimiento;
  }
  get socio() {
    return this._socio;
  }

  todo() {
    return `ID: ${this._id}, 
    Nombre: ${this._nombre}, 
    Direccion: ${this._direccion}, 
    Telefono: ${this._telefono}, 
    Email : ${this._email}
    Fecha de nacimiento: ${this._fechanacimiento} 
    Socio: ${this._socio} `;
  }
}
