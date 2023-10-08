import sequelize from "../db.js";
import UserModel from './userModel.js'
import CountryModel from './countryModel.js'
import ActivityModel from './activityModel.js'
import { DataTypes } from "sequelize";

const UserCountrysAndActivitysModel = sequelize.define('userCountries', {
    countryId: {
        type: DataTypes.INTEGER
    }
}, {timestamps:false})

CountryModel.belongsToMany(ActivityModel, { through: UserCountrysAndActivitysModel })

ActivityModel.belongsToMany(CountryModel, { through: UserCountrysAndActivitysModel })

UserModel.hasMany(ActivityModel, {
    foreignKey: 'userId',
    sourceKey: 'email'
})

ActivityModel.belongsTo(UserModel, {
    foreignKey: 'userId',
    targetKey: 'email'
})

export default UserCountrysAndActivitysModel
