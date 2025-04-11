import { pool } from "../database/connection.js"

// GET ————————————————————————————————————————————
export const getRestaurants = async (req, res) => {
    try {
        const [rows] = await pool.query(
            'SELECT * FROM restaurantes'
        );
        res.json(rows)
        
    } catch (error) {
        return res.status(500).json({
            message : 'Algo salió mal'
        })
    }
}


// GET ————————————————————————————————————————————
export const getARestaurant = async (req, res) => {
    try {
        // throw new Error("Error")
        const [rows] = await pool.query(
            'SELECT * FROM restaurantes WHERE id = ?',
            [req.params.id]
        )
        if (rows.length <= 0) return res.status(404).json({
            message : 'Ese restaurante no existe'
        }) 
        res.json(rows[0]);

    } catch (error) {
        return res.status(500).json({
            message : 'Algo salió mal'
        })
    }
}


// POST ————————————————————————————————————————————
export const postRestaurants = async (req, res) => {
    const {extension, restaurante} = req.body;

    try {
        const [rows] = await pool.query(
            'INSERT INTO restaurantes (extension, restaurante) VALUES (?, ?)',
            [extension, restaurante]
        );
        res.send({
            id: rows.insertId,
            extension,
            restaurante
        })

    } catch (error) {
        return res.status(500).json({
            message : 'Algo salió mal'
        })
    }
}


// PATCH ————————————————————————————————————————————
export const patchRestaurants = async (req, res) => {
    const {id} = req.params
    const {extension, restaurante} = req.body

    try {
        const [result] = await pool.query(
            'UPDATE restaurantes SET extension = IFNULL(?, extension), restaurante = IFNULL(?, restaurante) WHERE id = ?',
            [extension, restaurante, id]
        )
    
        if(result.affectedRows == 0) return res.status(404).json({
            message : 'Ese restaurante no existe'
        })
    
        const [rows] = await pool.query(
            'SELECT * FROM restaurantes WHERE id = ?',
            [id]
        )
    
        res.json(rows[0])
        
    } catch (error) {
        return res.status(500).json({
            message : 'Algo salió mal'
        })
    }
}


// DELETE ————————————————————————————————————————————
export const deleteRestaurants = async (req, res) => {
    try {
        const [RESULT] = await pool.query(
            'DELETE FROM restaurantes WHERE id = ?',
            [req.params.id]
        )
        if (RESULT.affectedRows <= 0) return res.status(404).json({
            message : 'Ese restaurante no existe'
        })
        res.sendStatus(204);
        
    } catch (error) {
        return res.status(500).json({
            message : 'Algo salió mal'
        })        
    }
}