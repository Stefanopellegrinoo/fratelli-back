// src/orders/orders.route.js
import express from "express";
import { OrdersController } from "./orders.controller.js";

const router = express.Router();
const controller = new OrdersController();

router.post("/", (req, res, next) => controller.createOrder(req, res, next));
router.get("/", (req, res, next) => controller.getOrders(req, res, next));
router.get("/:id", (req, res, next) => controller.getOrderById(req, res, next));

export default router;
