import { Schema, model } from "mongoose";

const empleadosSchema = new Schema(
  {
      //identificador:String,
      rda: String,
      cuadrilla: String,
      sitio: String,
      nombreEmpleado: {
        type: String,
        required: true,
        trim: true
        //unique : true si lo quiero unico
    },
  },
  { timestamps: true, versionKey:false }
);



export default model('Empleados', empleadosSchema)

