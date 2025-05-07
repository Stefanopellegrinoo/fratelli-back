import { PastasService } from "./pastas.service.js";

export default class PastasController {
    constructor(pastasService = new PastasService()) {
        this.pastasService = pastasService;
      }
      
    async getPastas(req, res, next){
        try {
            const pastas = await this.pastasService.getAllPastas();
            res.status(200).json(pastas);
          } catch (error) {
            console.error(error);
            next(error);
          }
    }

    async getPastasById(req, res, next){
        try {
            const { id } = req.params;
            const pasta = await this.pastasService.getPastaById(id);
      
            if (!pasta) {
              return res.status(404).json({ error: "Producto no encontrado" });
            }
      
            res.status(200).json(pasta);
          } catch (error) {
            console.error(error);
            next(error);
          }
    }

    async getFeatured(req, res, next) {
        try {
          const featured = await this.pastasService.getFeaturedPastas();
          res.status(200).json(featured);
        } catch (error) {
          console.error(error);
          next(error);
        }
      }

}
