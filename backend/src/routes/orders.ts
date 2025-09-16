import {Router} from "express";
import {pool} from "../db";

const router = Router();

router.post('/', async (req, res) => {
    const client = await pool.connect();

    try{
        const {customer_name, customer_email, customer_phone, delivery_address, items} = req.body;

        await client.query("BEGIN");

        const order = await client.query(
            `INSERT INTO orders (customer_name, customer_email, customer_phone, delivery_address) VALUES ($1, $2, $3, $4) RETURNING id`,
            [customer_name, customer_email, customer_phone, delivery_address]);

        const orderId = order.rows[0].id;

        for(const item of items){
            await client.query(
                `INSERT INTO order_items (order_id, flower_id, quantity) VALUES ($1, $2, $3)`,
                [orderId, item.flower_id, item.quantity]);
        }

        await client.query("COMMIT");
        res.status(200).json({ message: "Order created successfully", orderId });
    } catch(error){
        await client.query("ROLLBACK");
        console.error("Error creating order:", error);
        res.status(500).json({ error: "Failed to create order" });
    } finally {
        client.release();
    }
});

export default router;