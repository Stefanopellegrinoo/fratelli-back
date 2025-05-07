// src/orders/orders.service.js
import { OrdersRepository } from "./orders.repository.js";
import { PastasRepository } from "../pastas/pastas.respository.js";
import sendOrderMail from "../utils/mailer.js";

export class OrdersService {
  constructor() {
    this.repo = new OrdersRepository();
    this.pastaRepo = new PastasRepository();
  }

  async createOrder( customer, items, orderId) {

    let total = 0
    // Validar cada producto
    for (const item of items) {
      const { id, quantity } = item;
  
      if (!id || quantity <= 0) {
        throw new Error("Producto inválido o cantidad incorrecta.");
      }
  
      const exists = await this.pastaRepo.getById(id);
      total += exists.price
      if (!exists) {
        throw new Error(`La pasta con ID ${id} no existe.`);
      }
    }

  const data = {
    orderId :orderId,
    customer: customer,
    items: items,
    total: total
  }
    // Crear el pedido
    // const order = await this.repo.create(data);
  
    // // Obtener info completa del pedido para el mail (con populate)
    // const fullOrder = await this.repo.getById(order._id);
  
    // // Armar HTML de productos
    // const productosHtml = fullOrder.items.map(i =>
    //   `<li>${i.quantity} x ${i.pastaId.name} - $${i.pastaId.price}</li>`).join("");
  
    // const total = fullOrder.items.reduce(
    //   (acc, i) => acc + (i.quantity * i.pastaId.price),
    //   0
    // );
  
    // const htmlCliente = `
    //   <h2>Gracias por tu pedido, ${customerName} 🍝</h2>
    //   <p>Estos son los detalles de tu pedido:</p>
    //   <ul>${productosHtml}</ul>
    //   <p><strong>Total:</strong> $${total}</p>
    //   <p>Nos estaremos comunicando con vos para coordinar la entrega.</p>
    // `;
  
    // const htmlAdmin = `
    //   <h2>Nuevo pedido recibido</h2>
    //   <p><strong>Nombre:</strong> ${customerName}</p>
    //   <p><strong>Teléfono:</strong> ${customerPhone}</p>
    //   <p><strong>Dirección:</strong> ${customerAddress || "-"}</p>
    //   <p><strong>Email:</strong> ${customerEmail}</p>
    //   <p><strong>Pago:</strong> ${paymentMethod}</p>
    //   <p><strong>Comentario:</strong> ${comment || "-"}</p>
    //   <ul>${productosHtml}</ul>
    //   <p><strong>Total:</strong> $${total}</p>
    // `;
  
    // await sendOrderMail({
    //   to: customerEmail,
    //   subject: "Gracias por tu pedido en Fratelli 🍝",
    //   html: htmlCliente
    // });
  
    // await sendOrderMail({
    //   to: process.env.MAIL_ADMIN,
    //   subject: "Nuevo pedido recibido en Fratelli",
    //   html: htmlAdmin
    // });
  
    return data;
  }

  async getOrders() {
    return await this.repo.getAll();
  }

  async getOrderById(id) {
    return await this.repo.getById(id);
  }
}
