import { Schema, model } from "mongoose";

const consumidosSchema = new Schema(
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
    type: String,
    //type: Date,
    default: obtenerHoraHonduras
    //default: Date.now // Guarda la fecha y hora actual por defecto
},
  producto: [{
      insumo: String,
      cantidad: String
  }]
  },
  { timestamps: true, versionKey:false }
);

// Función para obtener la hora actual de Honduras
function obtenerHoraHonduras() {
      // Obtener la fecha y hora actual del sistema local (UTC)
      let fechaHoraUTC = new Date();

      // Ajustar la hora a la zona horaria de Honduras (UTC-6)
      fechaHoraUTC.setUTCHours(fechaHoraUTC.getUTCHours() - 6);
  
      // Formatear la fecha y hora en un formato deseado (opcional)
      let options = {
          year: 'numeric', month: '2-digit', day: '2-digit',
          hour: '2-digit', minute: '2-digit', second: '2-digit',
          hour12: false,
          timeZone: 'America/Tegucigalpa' // Opcional: Especificar la zona horaria para asegurar la visualización correcta
      };
      
      return fechaHoraUTC.toLocaleString('es-HN', options);
}

export default model('ReporteConsumidos', consumidosSchema)

