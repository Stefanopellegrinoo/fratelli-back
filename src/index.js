import express from "express";
import cors from "cors";

import mongoose from "mongoose";
import dotenv from "dotenv";
import pastaRoutes from "./pastas/pastas.route.js";
import orderRoutes from "./orders/orders.route.js";
import { errorHandler } from "./utils/errorHandler.js";

dotenv.config();

const app = express();
app.use(express.json());
const allowedOrigins = [
   "https://fratelli-front.vercel.app",
   "http://localhost:3000"  
  ];
  
  app.use(cors({
    origin: function (origin, callback) {
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error('Not allowed by CORS'));
      }
    }
  }));
  

app.use(errorHandler);

app.use("/api/pastas", pastaRoutes);
app.use("/api/orders", orderRoutes);

// mongoose.connect(process.env.MONGO_URI).then(() => {
//   console.log("MongoDB conectado");
// });

const PORT = process.env.PORT || 3003;
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
  });
}
export default app; 