import { Schema, model } from "mongoose";

const sitiosSchema = new Schema(
  {
    identificador:String,
    sitio: {
        type: String,
        required: true,
        trim: true
        //unique : true si lo quiero unico
    },
  },
  { timestamps: true, versionKey:false }
);



export default model('Sitios', sitiosSchema)

