import express from "express";
import { test } from "../controllers/cCrud.js";

// Se crea el enrutador para este archivo
const router = express.Router();

// Creamos una ruta la cual esta compuesta por el metodo de html, el endpoint que va entre comillas y la funcion controladora
router.get("/test", test)

export default router;