import { Schema, model } from "mongoose";

const trasladosSchema = new Schema(
  {
    fechaTraslado: String,
    sedeOrigen: String,
    sedeDestino: String,
    empleadoEntrega: String,
    empleadoRecibe: String,
    nota: String,  
  producto: [{
      insumo: String,
      cantidad: String
  }]
  },
  { timestamps: true, versionKey:false }
);
export default model('ReporteTraslados', trasladosSchema)

