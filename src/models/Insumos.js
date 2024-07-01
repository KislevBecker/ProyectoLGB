import { Schema, model } from "mongoose";

const insumosSchema = new Schema(
  {
      //identificador:String,
      codigo: String,
      insumo: {
        type: String,
        required: true,
        trim: true
        //unique : true si lo quiero unico
    },
  },
  { timestamps: true, versionKey:false }
);



export default model('Insumos', insumosSchema)

