import sequelize from "../db.js";

const UserCountrysAndActivitysModel = sequelize.define('userCountries', {}, {timestamps:false})

export default UserCountrysAndActivitysModel
