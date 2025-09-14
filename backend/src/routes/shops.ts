import { Router } from 'express';
import { pool } from '../db';

const router = Router();

router.get("/", async (req, res) => {
    try{
        const result = await pool.query("SELECT * FROM shop");
        res.json(result.rows);
    } catch (error){
        console.error("Error fetching shops: ", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
})

export default router;