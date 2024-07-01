import Cantidades from "../models/Cantidades";

export const renderCantidad= async (req, res) => {
    const cantidad = await Cantidades.find().lean();
    res.render("cantidades", { cantidad: cantidad });
  };
  
  
  export const guardarCantidades= async (req, res) => {
    const cantidades = Cantidades(req.body);
    await cantidades.save();
    res.redirect("cantidades");
  };