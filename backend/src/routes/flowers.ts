import { Router } from 'express';
import { pool } from '../db';

const router = Router();

router.get("/:shopId/flowers", async (req, res) => {
    const { shopId} = req.params;

    try{
        const result = await pool.query("SELECT f.* FROM flower f JOIN shop_flowers sf ON f.id = sf.flower_id WHERE sf.shop_id = $1", [shopId]);
        res.json(result.rows);
    }catch(error){
        console.error("Error fetching flowers: ", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

export default router;
