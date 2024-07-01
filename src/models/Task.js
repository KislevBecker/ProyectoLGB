import { Schema, model } from "mongoose";

const taskSchema = new Schema(
  {
    cuadrilla: {
      type: String,
      required: true,
      trim: true
  },
  empleado: String,
  sitio: String,
  rda: String,
  fechaRegistro: {
    type: Date,
    default: Date.now // Guarda la fecha y hora actual por defecto
},
  producto: [{
      insumo: String,
      unidad: String,
      cantidad: String
  }]
  },
  { timestamps: true, versionKey:false }
);



export default model('Task', taskSchema)

