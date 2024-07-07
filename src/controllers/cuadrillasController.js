import Cuadrillas from "../models/Cuadrillas";

export const renderCuadrillas= async (req, res) => {
  const cuadrilla = await Cuadrillas.find().lean();
  res.render("cuadrillas", { cuadrillas: cuadrilla });
};


export const obtenerCuadrillaId= async(req, res) => {
    try {
        const cuadrilla= await Cuadrillas.findById(req.params.id).lean();
        res.render("editCuadrilla", {cuadrilla});
    } catch (error) {
        console.log(error.message)
    }
};
      
    
export const guardarCuadrilla =async (req, res) => {
      try {
        const cuadrilla = Cuadrillas(req.body);
        await cuadrilla.save();
        res.redirect("/cuadrillas");
      } catch (error) {
        console.log(error);
      }
};
    
export const actualizarCuadrillaId= async (req, res) => {
      // try {
      //   const cuadrilla = Cuadrillas(req.body);
      //   await cuadrilla.save();
      //   res.redirect("/");
      // } catch (error) {
      //   console.log(error);
      // }

      try {
        const { id } = req.params;
        const { cuadrilla: nuevaCuadrilla } = req.body;

        // Validar que el campo no esté vacío
        if (!nuevaCuadrilla) {
            return res.status(400).send('El código de la cuadrilla es requerido');
        }

        // Actualizar la cuadrilla por su ID utilizando findByIdAndUpdate
        const updatedCuadrilla = await Cuadrillas.findByIdAndUpdate(id, { cuadrilla: nuevaCuadrilla }, { new: true });

        if (!updatedCuadrilla) {
            return res.status(404).send('Cuadrilla no encontrada');
        }

        // Redirigir a la lista de cuadrillas u otra página de tu elección después de la actualización
        res.redirect("/cuadrillas");
    } catch (error) {
        console.error(error);
        res.status(500).send('Error interno del servidor');
    }
};
    

export const eliminarCuadrillasId= async (req, res) => {
  try {
      const { id } = req.params;

      // Buscar el insumo por su ID y eliminarlo
      const deletedCuadrilla = await Sitios.findByIdAndDelete(id);

      if (!deletedCuadrilla) {
          return res.status(404).send('Cuadrilla no encontrada para eliminar');
      }

      // Redirigir a la lista de insumos u otra página de tu elección después de la eliminación
      res.redirect("/cuadrillas");
  } catch (error) {
      console.error(error);
      res.status(500).send('Error interno del servidor');
  }
};
