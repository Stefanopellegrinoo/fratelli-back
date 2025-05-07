// src/orders/orders.controller.js
import { OrdersService } from "./orders.service.js";

export class OrdersController {
  constructor() {
    this.service = new OrdersService();
  }

  async createOrder(req, res, next) {
    try {
      const {
      orderId,
      customer,
      items,
      } = req.body;

      const {
        name,
        phone,
        email,
        customerAddress,
        paymentMethod,
        comment,
      } = customer;

      // Validaciones mínimas
      if (!name || !phone || !email || !items?.length || !paymentMethod || !orderId) {
        throw new Error("Datos del pedido incompletos.");
      }
      const order = await this.service.createOrder(customer, items, orderId);

      res.status(201).json(order);
    } catch (e) {
      console.error(e);
      next(e);
    }
  }

  async getOrders(req, res, next) {
    try {
      const orders = await this.service.getOrders();
      res.status(200).json(orders);
    } catch (e) {
      console.error(e);
      next(e);
    }
  }

  async getOrderById(req, res, next) {
    try {
      const { id } = req.params;
      const order = await this.service.getOrderById(id);
      res.status(200).json(order);
    } catch (e) {
      console.error(e);
      next(e);
    }
  }
}
