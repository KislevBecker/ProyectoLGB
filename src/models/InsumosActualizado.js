import { Schema, model } from "mongoose";

const insumosASchema = new Schema(
  {
      codigo: String,
      unidad: String,
      insumo: {
        type: String,
        required: true,
        trim: true
    },
  },
  { timestamps: true, versionKey:false }
);



export default model('InsumosActualizado', insumosASchema)

