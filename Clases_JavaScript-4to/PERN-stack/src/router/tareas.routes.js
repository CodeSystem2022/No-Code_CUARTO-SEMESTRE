import Router from "express-promise-router";
import { listarTareas, listarTarea, crearTarea, actualizarTarea, eliminarTarea } from "../controllers/tareas.controller.js";
import { isAuth } from "../middlewares/auth.middelware.js";

const router = Router();

router.get('/tareas', isAuth, listarTareas);

router.get('/tarea/:id', isAuth, listarTarea);

router.post('/tareas', isAuth, crearTarea);

router.put('/tarea/:id', isAuth, actualizarTarea);

router.delete('/tarea/:id', isAuth, eliminarTarea);

export default router;