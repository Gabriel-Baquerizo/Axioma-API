import { pool } from "../database/connection.js"


export const getRestaurants = async (req, res) => {
    try {
        const [rows] = await pool.query(
            'SELECT * FROM restaurants'
        );
        res.json(rows)

    } catch (error) {
        return res.status(500).json({
            message : 'Algo salió mal'
        })
    }
}


export const getARestaurant = async (req, res) => {
    try {
        // throw new Error("Error")
        const [rows] = await pool.query(
            'SELECT * FROM restaurants WHERE id = ?',
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


export const postRestaurants = async (req, res) => {
    const {tlf_ip, local} = req.body;

    try {
        const [rows] = await pool.query(
            'INSERT INTO restaurants (tlf_ip, local) VALUES (?, ?)',
            [tlf_ip, local]
        );
        res.send({
            id: rows.insertId,
            tlf_ip,
            local
        })

    } catch (error) {
        return res.status(500).json({
            message : 'Algo salió mal'
        })
    }
}


export const patchRestaurants = async (req, res) => {
    const {id} = req.params
    const {tlf_ip, local} = req.body

    try {
        const [result] = await pool.query(
            'UPDATE restaurants SET tlf_ip = IFNULL(?, tlf_ip), local = IFNULL(?, local) WHERE id = ?',
            [tlf_ip, local, id]
        )
    
        if(result.affectedRows == 0) return res.status(404).json({
            message : 'Ese restaurante no existe'
        })
    
        const [rows] = await pool.query(
            'SELECT * FROM restaurants WHERE id = ?',
            [id]
        )
    
        res.json(rows[0])
        
    } catch (error) {
        return res.status(500).json({
            message : 'Algo salió mal'
        })
    }
}


export const deleteRestaurants = async (req, res) => {
    try {
        const [RESULT] = await pool.query(
            'DELETE FROM restaurants WHERE id = ?',
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