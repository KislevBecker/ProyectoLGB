import { Schema, model } from "mongoose";

const unidadesSchema = new Schema(
  {
    //identificador:String,
    unidad: {
        type: String,
        required: true,
        trim: true
        //unique : true si lo quiero unico
    },
  },
  { timestamps: true, versionKey:false }
);



export default model('Unidades', unidadesSchema)

