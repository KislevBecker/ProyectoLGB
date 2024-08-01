import { Router } from "express";

import Cuadrillas from "../models/Cuadrillas";
import Insumos from "../models/Insumos";
import Sitios from "../models/Sitios";
import Empleados from "../models/Empleados";
import Cantidades from "../models/Cantidades";
import Unidades from "../models/Unidades";

import{renderTasks, guardarTasks} from "../controllers/taskController";
import{renderConsumidos, guardarConsumidos} from "../controllers/reporteConsumidosController";
import {renderInsumos, guardarInsumos, obtenerInsumoId, actualizarInsumosId, eliminarInsumosId} from "../controllers/insumosController";
import {renderInsumosA, guardarInsumosA, obtenerInsumoAId, actualizarInsumosAId, eliminarInsumosAId} from "../controllers/insumosActualizadosController";

import {renderSitios, guardarSitio, obtenerSitioId, actualizarSitiosId, eliminarSitiosId} from "../controllers/sitiosController";

import {obtenerCuadrillaId, guardarCuadrilla, actualizarCuadrillaId, renderCuadrillas, eliminarCuadrillasId} from "../controllers/cuadrillasController";

import {renderCantidad, guardarCantidades} from "../controllers/cantidadController";
import {guardarUnidades, renderUnidad} from "../controllers/unidadesController";
import InsumosActualizado from "../models/InsumosActualizado";
import { guardarTraslados, renderTraslados } from "../controllers/reporteTrasladosController";
import { guardarRetiros, renderRetiros } from "../controllers/reporteRetirosController";
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


router.get("/2", async (req, res) => {
  try{
    const cuadrillas = await Cuadrillas.find().lean();
    const insumosI = await InsumosActualizado.find().lean();
    const sitio = await Sitios.find().lean();
    const cantidad = await Cantidades.find().lean();
    res.render("reporteConsumidos", { cuadrillas: cuadrillas, 
      insumosI:insumosI,
    sitios: sitio, cantidades:cantidad });
  }catch(err){
    console.error(err);
    res.status(500).send('Error interno del servidor');
  }
});


router.get("/3", async (req, res) => {
  try{
    const insumosI = await InsumosActualizado.find().lean();
    //const sitio = await Sitios.find().lean();
    const cantidad = await Cantidades.find().lean();
    res.render("reporteTraslados", { insumosI:insumosI,
    cantidades:cantidad });
  }catch(err){
    console.error(err);
    res.status(500).send('Error interno del servidor');
  }
});

router.get("/4", async (req, res) => {
  try{
    const insumosI = await InsumosActualizado.find().lean();
    //const sitio = await Sitios.find().lean();
    const cantidad = await Cantidades.find().lean();
    res.render("reporteRetiros", { insumosI:insumosI,
    cantidades:cantidad });
  }catch(err){
    console.error(err);
    res.status(500).send('Error interno del servidor');
  }
});


router.post("/tasks/add", guardarTasks);
router.get('/tasks', renderTasks);

router.post("/reporteConsumidos/add", guardarConsumidos);
router.get('/reporteConsumidos', renderConsumidos);

router.post("/reporteTraslados/add", guardarTraslados);
router.get('/reporteTraslados', renderTraslados);

router.post("/reporteRetiros/add", guardarRetiros);
router.get('/reporteRetiros', renderRetiros);


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


router.get("/insumosA", renderInsumosA);
router.post("/insumosA/add", guardarInsumosA);
router.get("/edit-insumosA/:id", obtenerInsumoAId);
router.post("/edit-insumosA/:id", actualizarInsumosAId);
router.post("/delete-insumosA/:id", eliminarInsumosAId);


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
