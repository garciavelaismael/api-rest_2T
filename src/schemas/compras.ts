import { Schema, model } from "mongoose";

const compraSchema = new Schema({
  _id: {
    type: String,
    unique: true
  },
  _nombreCliente: {
    type: String
  },
  _idProducto: {
    type: String,
  },
  _coste: {
    type: Number
  },
  _fecha: {
    type: Date
  }
});

export type tCompra = {
  //exporta tipo compra
  _id: string | null;
  _nombreCliente: string | null;
  _idProducto: string | null;
  _coste: number | null;
  _fecha: Date | null;
};

export const CompraDB = model("compras", compraSchema)
