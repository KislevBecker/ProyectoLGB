import { Schema, model } from "mongoose";

const cuadrillaSchema = new Schema(
  {
    cuadrilla: {
        type: String,
        required: true,
        trim: true
        //unique : true si lo quiero unico
    },
  },
  { timestamps: true, versionKey:false }
);



export default model('Cuadrillas', cuadrillaSchema)

