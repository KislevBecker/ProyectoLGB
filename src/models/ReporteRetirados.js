import { Schema, model } from "mongoose";

const retirosSchema = new Schema(
  {
    fechaRetiro: String,
    sedeRetiro: String,
    empleadoEntrega: String,
    empleadoRecibe: String,
    cuadrilla: String,
  producto: [{
      insumo: String,
      cantidad: String
  }]
  },
  { timestamps: true, versionKey:false }
);
export default model('ReporteRetiros', retirosSchema)

