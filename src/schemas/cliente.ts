import { Schema, model } from "mongoose";
import { Producto } from "../classes/producto/producto";

const clienteSchema = new Schema({
  _id: {
    type: String,
  },
  _nombre: {
    type: String,
  },
  _direccion: {
    type: {
      calle: String,
      numero: Number,
    },
  },
  _telefono: {
    type: Number,
  },
  _email: {
    type: String,
  },
  _fechanacimiento: {
    type: Date,
  },
  _socio: {
    type: Boolean,
  },
  _carrito: {
    type: Array,
  },
});

export type tCliente = {
  //exporta tipo cliente
  _id: string | null;
  _nombre: string | null;
  _direccion: {
    calle: string;
    numero: number;
  } | null;
  _telefono: number | null;
  _email: string | null;
  _fechanacimiento: Date | null;
  _socio: Boolean | null;
  _carrito: Array<Producto>;
};

export const ClienteDB = model("clientes", clienteSchema);
