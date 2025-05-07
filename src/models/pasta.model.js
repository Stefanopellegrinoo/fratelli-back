// src/models/pasta.model.js
import mongoose from "mongoose";

const pastaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    default: "",
    trim: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  stock: {
    type: Number,
    default: 0,
    min: 0
  },
  imageUrl: {
    type: String,
    default: ""
  },
  category: {
    type: String,
    enum: ["ravioles", "ñoquis", "fideos", "canelones", "otros"],
    default: "otros"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Pasta", pastaSchema);
