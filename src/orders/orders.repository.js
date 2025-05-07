// src/orders/orders.repository.js
import OrderModel from "../models/order.model.js";

export class OrdersRepository {
  async create(orderData) {
    console.log(orderData)
    return true
    // const order = new OrderModel(orderData);
    // return await order.save();
  }

  async getAll() {
    return await OrderModel.find().populate("items.pastaId");
  }

  async getById(id) {
    return 1
    // return await OrderModel.findById(id).populate("items.pastaId");
  }
}
