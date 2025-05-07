// src/models/order.model.js
import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  customerPhone: { type: String, required: true },
  customerEmail: { type: String, required: true },
  customerAddress: { type: String },
  comment: { type: String },

  items: [
    {
      pastaId: { type: mongoose.Schema.Types.ObjectId, ref: "Pasta", required: true },
      quantity: { type: Number, required: true }
    }
  ],
  paymentMethod: { type: String, enum: ["efectivo", "transferencia"], required: true },
  comment: { type: String },
  status: { type: String, enum: ["pendiente", "confirmado", "enviado", "entregado"], default: "pendiente" },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Order", orderSchema);
