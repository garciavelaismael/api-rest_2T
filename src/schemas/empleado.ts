import { Schema, model } from "mongoose";

const empleadoSchema = new Schema({
  _id: {
    type: String,
    required: true,
    unique: true
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
  _ventas: {
    type: Number,
  },
  _horas: {
    type: Number,
  }
});

export type tEmpleado = {
  //exporta tipo empleado
  _id: string | null;
  _nombre: string | null;
  _direccion: {
    calle: string;
    numero: number;
  } | null;
  _telefono: number | null;
  _email: string | null;
  _ventas: number | null;
  _horas: number | null;
};

export const EmpleadoDB = model("empleados", empleadoSchema);
