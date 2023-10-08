import sequelize from "../db.js";
import { DataTypes } from "sequelize";

const Country = sequelize.define('countries', {
    id: {
        type: DataTypes.STRING(3),
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING(30)
    },
    image: {
        type: DataTypes.STRING
    },
    continent: {
        type: DataTypes.STRING(20)
    },
    captial: {
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
    }
}, {timestamps: false})

export default Country