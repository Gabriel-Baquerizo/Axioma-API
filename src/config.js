import {config} from 'dotenv';

config()

export const DB_HOST = process.env.DB_HOST || 'localhost';
export const PORT = process.env.PORT || 3000;
export const DB_USER = process.env.DB_USER || 'root';
export const DB_PASS = process.env.DB_PASS || '!SQL.gabriel*22';
export const DB_PORT = process.env.DB_PORT || 3306;
export const DB_NAME = process.env.DB_NAME || 'axioma';