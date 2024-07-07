import Insumos from "../models/Insumos";

export const renderInsumos= async (req, res) => {
    const insumo = await Insumos.find().lean();
    res.render("insumos", { insumos: insumo });
  };
  
  
  export const guardarInsumos= async (req, res) => {
    const insumo = Insumos(req.body);
    await insumo.save();
    res.redirect("/insumos");
  };

  export const obtenerInsumoId= async(req, res) => {
    try {
        const insumo= await Insumos.findById(req.params.id).lean();
        res.render("editInsumos", {insumo});
    } catch (error) {
        console.log(error.message)
    }
};
    
  export const actualizarInsumosId= async (req, res) => {
    try {
      const id = req.params.id;
      const { codigo, insumo } = req.body; // Obtener los datos actualizados del formulario

      // Validar que los campos no estén vacíos (puedes agregar más validaciones según tus necesidades)
      if (!codigo || !insumo) {
          return res.status(400).send('Los campos no pueden estar vacíos');
      }

      // Actualizar el insumo en la base de datos
      const updatedInsumo = await Insumos.findByIdAndUpdate(id, { codigo, insumo }, { new: true });

      if (!updatedInsumo) {
          return res.status(404).send('Insumo no encontrado para actualizar');
      }

      // Redireccionar o enviar una respuesta de éxito
      res.redirect('/insumos'); // Por ejemplo, redirigir a la lista de insumos actualizada
  } catch (err) {
      console.error(err);
      res.status(500).send('Error interno del servidor');
  }
};

export const eliminarInsumosId= async (req, res) => {
  try {
      const { id } = req.params;

      // Buscar el insumo por su ID y eliminarlo
      const deletedInsumo = await Insumos.findByIdAndDelete(id);

      if (!deletedInsumo) {
          return res.status(404).send('Insumo no encontrado para eliminar');
      }

      // Redirigir a la lista de insumos u otra página de tu elección después de la eliminación
      res.redirect("/insumos");
  } catch (error) {
      console.error(error);
      res.status(500).send('Error interno del servidor');
  }
};
