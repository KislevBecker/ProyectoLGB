import ReporteConsumidos from "../models/ReporteConsumidos";


export const renderConsumidos = async (req, res) => {
      try {
        const consumidos = await ReporteConsumidos.find().lean(); // Utiliza lean() para obtener objetos JavaScript simples
        res.render('consumidos', { consumidos }); // Pasa los datos a la vista Handlebars
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al obtener los insumos');
    }
};

export const guardarConsumidos= async (req, res) => {
  const {cuadrilla, empleado, sitio, rda, inputsData} = req.body;
  
    try {
      const newTask = new ReporteConsumidos({
        cuadrilla,
        empleado,
        sitio,
        rda,
        producto: inputsData // Guarda el arreglo de objetos inputsData en el campo producto
    });
  
       // Guardar el nuevo documento en la base de datos
       const savedConsumidos = await newTask.save();
      res.redirect("/");
    } catch (error) {
      console.error('No se pudo guardar en la base de datos: ', error);
      res.status(500).send('Error interno del servidor');
    }
};