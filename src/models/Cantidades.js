import { Schema, model } from "mongoose";

const cantidadesSchema = new Schema(
  {
    //identificador:String,
    cantidad: {
        type: String,
        required: true,
        trim: true
        //unique : true si lo quiero unico
    },
  },
  { timestamps: true, versionKey:false }
);



export default model('Cantidades', cantidadesSchema)

