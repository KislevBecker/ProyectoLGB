import Unidades from "../models/Unidades";

export const renderUnidad= async (req, res) => {
    const unidad = await Unidades.find().lean();
    res.render("unidades", { unidad: unidad });
  };
  
  
  export const guardarUnidades= async (req, res) => {
    const unidades = Unidades(req.body);
    await unidades.save();
    res.redirect("unidades");
  };