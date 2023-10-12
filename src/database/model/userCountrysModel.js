import sequelize from "../db.js";
import { DataTypes } from "sequelize";

const UserCountrysAndActivitysModel = sequelize.define('userCountries', {
    countryId: {
        type: DataTypes.INTEGER
    }
}, {timestamps:false})

export default UserCountrysAndActivitysModel
