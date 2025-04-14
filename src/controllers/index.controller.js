import { pool } from "../database/connection.js";

export const indexQuery = async (req, res) => {
    const [RESULT] = await pool.query(
        'SELECT "Gabriel" AS USUARIO; RENAME TABLE restaurantes TO cambioaplicado;'
    )
    res.json(RESULT[0]);
}