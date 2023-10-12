import { Sequelize } from "sequelize";
import dotenv from 'dotenv';
dotenv.config()

const { DB_USER, DB_PASSWORD, DB_HOST } = process.env
 
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/dbpi`, {
    logging: false,
    host: DB_HOST,
    dialect: 'postgres',
    ssl: true, // Habilita SSL
    dialectOptions: {
        ssl: {
        require: true, // Puedes establecerlo en true si es requerido
        },
    },
})

export default sequelize