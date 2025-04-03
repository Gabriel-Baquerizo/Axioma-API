import {createPool} from 'mysql2/promise'
import { DB_HOST, DB_USER, DB_PASS, DB_PORT, DB_NAME } from '../config.js'

const pool = createPool({
    host: DB_HOST,
    post: DB_PORT,
    user: DB_USER,
    password: DB_PASS,
    database: DB_NAME
})

export {
    pool
}