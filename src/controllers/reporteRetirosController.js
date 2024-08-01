import ReporteRetiros from "../models/ReporteRetirados";


export const renderRetiros = async (req, res) => {
      try {
        const retiros = await ReporteRetiros.find().lean(); // Utiliza lean() para obtener objetos JavaScript simples
        res.render('retiros', { retiros }); // Pasa los datos a la vista Handlebars
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al obtener los insumos');
    }
};

export const guardarRetiros= async (req, res) => {
  const {fechaRetiro, sedeRetiro,empleadoEntrega, empleadoRecibe, cuadrilla, inputsData} = req.body;
  
    try {
      const newTask = new ReporteRetiros({
        fechaRetiro,
        sedeRetiro,
        empleadoEntrega,
        empleadoRecibe,
        cuadrilla,
        producto: inputsData // Guarda el arreglo de objetos inputsData en el campo producto
    });
  
       // Guardar el nuevo documento en la base de datos
       const savedTraslados = await newTask.save();
      res.redirect("/");
    } catch (error) {
      console.error('No se pudo guardar en la base de datos: ', error);
      res.status(500).send('Error interno del servidor');
    }
};