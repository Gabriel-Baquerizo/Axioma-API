import { pool } from "../database/connection.js";

export const indexQuery = async (req, res) => {
    const [RESULT] = await pool.query(
        'RENAME TABLE restaurantes TO cambioaplicado;'
    )
    res.json(RESULT[0]);
}