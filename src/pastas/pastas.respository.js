// src/pastas/pastas.repository.js
import { products } from "../data/products.js";
import PastaModel from "../models/pasta.model.js";

export class PastasRepository {
  async getById(id) {
    return products.find(p => p.id === Number(id)) || null;
  }
  async getAll() {
    return  products
    // return await PastaModel.findById(id);
  }

  async getFeatured() {
    return products.filter(p => p.featured);
  }
}
