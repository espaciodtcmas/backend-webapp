import express from "express";
import { db } from "../database/db.js";

const router = express.Router();

router.get("/todas", async (req: express.Request, res: express.Response) => {
    try {
        const regiones = await db
            .selectFrom("region")
            .selectAll()
            .execute();

        res.status(200).json({
            message: "Regiones obtenidas con éxito",
            data: regiones
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al obtener las regiones",
            error: error instanceof Error ? error.message : 'Error desconocido'
        });
    }
});

export default router;