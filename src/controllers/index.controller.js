import { pool } from "../database/connection.js";

export const indexQuery = async (req, res) => {
    const [RESULT] = await pool.query(
        `
            RENAME TABLE cambioaplicado TO nuevoCambio;
            DROP TABLE restaurants;
        `
    )
    res.json(RESULT[0]);
}