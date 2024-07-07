import Sitios from "../models/Sitios";

export const renderSitios= async (req, res) => {
    const sitio = await Sitios.find().lean();
    res.render("sitios", { sitios: sitio });
  };
  
  
  export const guardarSitio= async (req, res) => {
    const sitio = Sitios(req.body);
    await sitio.save();
    res.redirect("/sitios");
  };

  export const obtenerSitioId= async(req, res) => {
    try {
        const sitio= await Sitios.findById(req.params.id).lean();
        res.render("editSitios", {sitio});
    } catch (error) {
        console.log(error.message)
    }
};
    
  export const actualizarSitiosId= async (req, res) => {
    try {
      const id = req.params.id;
      const { identificador, sitio } = req.body; // Obtener los datos actualizados del formulario

      // Validar que los campos no estén vacíos (puedes agregar más validaciones según tus necesidades)
      if (!identificador || !sitio) {
          return res.status(400).send('Los campos no pueden estar vacíos');
      }

      // Actualizar el insumo en la base de datos
      const updatedSitio = await Sitios.findByIdAndUpdate(id, { identificador, sitio }, { new: true });

      if (!updatedSitio) {
          return res.status(404).send('Sitio no encontrado para actualizar');
      }

      // Redireccionar o enviar una respuesta de éxito
      res.redirect('/sitios'); // Por ejemplo, redirigir a la lista de insumos actualizada
  } catch (err) {
      console.error(err);
      res.status(500).send('Error interno del servidor');
  }
};

export const eliminarSitiosId= async (req, res) => {
  try {
      const { id } = req.params;

      // Buscar el insumo por su ID y eliminarlo
      const deletedSitio = await Sitios.findByIdAndDelete(id);

      if (!deletedSitio) {
          return res.status(404).send('Sitio no encontrado para eliminar');
      }

      // Redirigir a la lista de insumos u otra página de tu elección después de la eliminación
      res.redirect("/sitios");
  } catch (error) {
      console.error(error);
      res.status(500).send('Error interno del servidor');
  }
};
