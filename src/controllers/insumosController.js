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