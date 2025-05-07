import { PastasRepository } from "./pastas.respository.js";


export class PastasService {
  constructor() {
    this.repo = new PastasRepository();
  }
  getAllPastas() {
    return this.repo.getAll();
  }

  getPastaById(id) {
    return this.repo.getById(id);
  }

  getFeaturedPastas() {
    return this.repo.getFeatured();
  }

}