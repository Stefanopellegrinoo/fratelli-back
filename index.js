import express from "express";
import cors from "cors";

import mongoose from "mongoose";
import dotenv from "dotenv";
import pastaRoutes from "./src/pastas/pastas.route.js";
import orderRoutes from "./src/orders/orders.route.js";
import { errorHandler } from "./src/utils/errorHandler.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use(errorHandler);

app.use("/api/pastas", pastaRoutes);
app.use("/api/orders", orderRoutes);

// mongoose.connect(process.env.MONGO_URI).then(() => {
//   console.log("MongoDB conectado");
// });

app.listen(3003, () => console.log("Servidor en puerto 3000"));