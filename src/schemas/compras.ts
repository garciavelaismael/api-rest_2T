import { Schema, model } from "mongoose";
import { Producto } from "../classes/producto/producto";

const compraSchema = new Schema({
  _id: {
    type: String
  },
  _nombreCliente: {
    type: String
  },
  _coste: {
    type: Number
  },
  _productos: {
    type: Array,
  },
});

export type tCompra = {
  //exporta tipo compra
  _id: string | null;
  _nombreCliente: string | null;
  _coste: number | null;
  _productos: Array<Producto>;
};

export const CompraDB = model("compras", compraSchema)
