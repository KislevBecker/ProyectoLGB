import ReporteTraslados from "../models/ReporteTraslados";


export const renderTraslados = async (req, res) => {
      try {
        const traslados = await ReporteTraslados.find().lean(); // Utiliza lean() para obtener objetos JavaScript simples
        res.render('traslados', { traslados }); // Pasa los datos a la vista Handlebars
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al obtener los insumos');
    }
};

export const guardarTraslados= async (req, res) => {
  const {fechaTraslado, sedeOrigen, sedeDestino, empleadoEntrega, empleadoRecibe, nota, inputsData} = req.body;
  
    try {
      const newTask = new ReporteTraslados({
        fechaTraslado,
        sedeOrigen,
        sedeDestino,
        empleadoEntrega,
        empleadoRecibe,
        nota,
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