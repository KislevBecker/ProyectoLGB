import Cuadrillas from "../models/Cuadrillas";

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
        res.redirect("/");
      } catch (error) {
        console.log(error);
      }
};
    
export const actualizarCuadrillaId= async (req, res) => {
      try {
        const cuadrilla = Cuadrillas(req.body);
        await cuadrilla.save();
        res.redirect("/");
      } catch (error) {
        console.log(error);
      }
};
    