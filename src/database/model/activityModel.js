import sequelize from "../db.js";
import { DataTypes } from "sequelize";

const ActivityModel = sequelize.define('activities', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(15),
        unique: true
    },
    difficulty: {
        type: DataTypes.INTEGER
    },
    duration: {
        type: DataTypes.STRING(5)
    },
    season: {
        type: DataTypes.STRING(15)
    }
})

export default ActivityModel