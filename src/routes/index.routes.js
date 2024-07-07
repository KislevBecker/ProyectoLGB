import { Router } from "express";

import Cuadrillas from "../models/Cuadrillas";
import Insumos from "../models/Insumos";
import Sitios from "../models/Sitios";
import Empleados from "../models/Empleados";
import Cantidades from "../models/Cantidades";
import Unidades from "../models/Unidades";

import{renderTasks, guardarTasks} from "../controllers/taskController";
import {renderInsumos, guardarInsumos, obtenerInsumoId, actualizarInsumosId, eliminarInsumosId} from "../controllers/insumosController";
import {renderSitios, guardarSitio, obtenerSitioId, actualizarSitiosId, eliminarSitiosId} from "../controllers/sitiosController";

import {obtenerCuadrillaId, guardarCuadrilla, actualizarCuadrillaId, renderCuadrillas, eliminarCuadrillasId} from "../controllers/cuadrillasController";

import {renderCantidad, guardarCantidades} from "../controllers/cantidadController";
import {guardarUnidades, renderUnidad} from "../controllers/unidadesController";
// import { guardarSitio } from "../controllers/sitiosController";

const router = Router();

router.get("/", async (req, res) => {
  try{
    const cuadrillas = await Cuadrillas.find().lean();
    const insumosI = await Insumos.find().lean();
    const sitio = await Sitios.find().lean();
    const cantidad = await Cantidades.find().lean();
    const unidad = await Unidades.find().lean();
    res.render("index", { cuadrillas: cuadrillas, 
      insumosI:insumosI,
    sitios: sitio, cantidades:cantidad, unidades:unidad });
  }catch(err){
    console.error(err);
    res.status(500).send('Error interno del servidor');
  }
});

router.post("/tasks/add", guardarTasks);
router.get('/tasks', renderTasks);


router.post("/cantidades/add", guardarCantidades);
router.get('/cantidades', renderCantidad);

router.post("/unidades/add", guardarUnidades);
router.get('/unidades', renderUnidad);


router.get("/cuadrillas", renderCuadrillas);
router.get("/edit-cuadrillas/:id", obtenerCuadrillaId);
router.post("/cuadrillas/add", guardarCuadrilla);
router.post("/edit-cuadrillas/:id", actualizarCuadrillaId);
router.post("/delete-cuadrillas/:id", eliminarCuadrillasId);
// router.get("/sitios", async (req, res) => {
//   const sitio = await Sitios.find().lean();
//   res.render("sitios", { sitios: sitio });
// });
// router.post("/sitios/add", async (req, res) => {
//   const sitios = Sitios(req.body);
//   await sitios.save();
//   res.redirect("/sitios");
// });
router.get("/sitios", renderSitios);
router.post("/sitios/add", guardarSitio);
router.get("/edit-sitios/:id", obtenerSitioId);
router.post("/edit-sitios/:id", actualizarSitiosId);
router.post("/delete-sitios/:id", eliminarSitiosId);



router.get("/insumos", renderInsumos);
router.post("/insumos/add", guardarInsumos);
router.get("/edit-insumos/:id", obtenerInsumoId);
router.post("/edit-insumos/:id", actualizarInsumosId);
router.post("/delete-insumos/:id", eliminarInsumosId);

router.get("/empleados", async (req, res) => {
  const empleado = await Empleados.find().lean();
  res.render("empleados", { empleados: empleado });
});
router.post("/empleados/add", async (req, res) => {
  const empleado = Empleados(req.body);
  await empleado.save();
  res.redirect("/");
});


router.get("/about", (req, res) => {
  res.send("Hola mundo");
});

export default router;
