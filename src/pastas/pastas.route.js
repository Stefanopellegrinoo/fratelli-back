import express from "express";
import PastasController from "./pastas.controller.js";

const router = express.Router();
const pastaController = new PastasController();

router.get("/", (req, res, next) => pastaController.getPastas(req, res, next));

router.get("/featured", (req, res, next) => pastaController.getFeatured(req, res, next));

router.get("/:id", (req, res, next) => pastaController.getPastasById(req, res, next));




export default router;