import sequelize from "../db.js";
import { DataTypes } from "sequelize";

const CountryModel = sequelize.define('country', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(60)
    },
    image: {
        type: DataTypes.STRING
    },
    continent: {
        type: DataTypes.STRING(20)
    },
    capital: {
        type: DataTypes.STRING(30)
    },
    subregion: {
        type: DataTypes.STRING(40)
    },
    area: {
        type: DataTypes.INTEGER
    },
    population: {
        type: DataTypes.INTEGER
    },
    map: {
        type: DataTypes.STRING
    }
}, {timestamps: false})

export default CountryModel