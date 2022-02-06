import { Schema, model } from "mongoose";

const liqSchema = new Schema({
  _id: {
    type: String,
  },
  _nombreProd: {
    type: String,
  },
  _marca: {
    type: String,
  },
  _sabor: {
    type: String,
  },
  _nicotina: {
    type: Number,
  },
  _coste: {
    type: Number,
  }
});

export type tLiquido = {
  //exporta tipo liquido
  _id: string | null;
  _nombreProd: string | null;
  _marca: string | null;
  _sabor: string | null;
  _nicotina: number | null;
  _coste: number | null;
};

export const LiquidoDB = model("liquido", liqSchema)
