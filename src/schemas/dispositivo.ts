import { Schema, model } from "mongoose";

const dispSchema = new Schema({
  _id: {
    type: String,
  },
  _nombreProd: {
    type: String,
  },
  _marca: {
    type: String,
  },
  _potencia: {
    type: Number,
  },
  _bateria: {
    type: Number,
  },
  _coste: {
    type: Number
  }
});

export type tDispositivo = {
  //exporta tipo dispositivo
  _id: string | null;
  _nombreProd: string | null;
  _marca: string | null;
  _potencia: number | null;
  _bateria: number | null;
  _coste: number | null;
};

export const DispositivoDB = model("dispositivo", dispSchema)
