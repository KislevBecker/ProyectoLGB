import InsumosA from "../models/InsumosActualizado";

export const renderInsumosA= async (req, res) => {
    const insumoA = await InsumosA.find().lean();
    res.render("insumosA", { insumosA: insumoA });
  };
  
  
  export const guardarInsumosA= async (req, res) => {
    const insumoA = InsumosA(req.body);
    await insumoA.save();
    res.redirect("/insumosA");
  };

  export const obtenerInsumoAId= async(req, res) => {
    try {
        const insumoA= await InsumosA.findById(req.params.id).lean();
        res.render("editInsumosA", {insumoA});
    } catch (error) {
        console.log(error.message)
    }
};
    
  export const actualizarInsumosAId= async (req, res) => {
    try {
      const id = req.params.id;
      const { codigo, insumo, unidad } = req.body; // Obtener los datos actualizados del formulario

      // Validar que los campos no estén vacíos (puedes agregar más validaciones según tus necesidades)
      if (!codigo || !insumo || !unidad) {
          return res.status(400).send('Los campos no pueden estar vacíos');
      }

      // Actualizar el insumo en la base de datos
      const updatedInsumoA = await InsumosA.findByIdAndUpdate(id, { codigo, insumo, unidad }, { new: true });

      if (!updatedInsumoA) {
          return res.status(404).send('Insumo no encontrado para actualizar');
      }

      // Redireccionar o enviar una respuesta de éxito
      res.redirect('/insumosA'); // Por ejemplo, redirigir a la lista de insumos actualizada
  } catch (err) {
      console.error(err);
      res.status(500).send('Error interno del servidor');
  }
};

export const eliminarInsumosAId= async (req, res) => {
  try {
      const { id } = req.params;

      // Buscar el insumo por su ID y eliminarlo
      const deletedInsumoA = await InsumosA.findByIdAndDelete(id);

      if (!deletedInsumoA) {
          return res.status(404).send('Insumo no encontrado para eliminar');
      }

      // Redirigir a la lista de insumos u otra página de tu elección después de la eliminación
      res.redirect("/insumosA");
  } catch (error) {
      console.error(error);
      res.status(500).send('Error interno del servidor');
  }
};
