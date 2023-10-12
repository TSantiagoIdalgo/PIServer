import UserModel from '../model/userModel.js'
import CountryModel from '../model/countryModel.js'
import ActivityModel from '../model/activityModel.js'
import UserCountrysAndActivitysModel from '../model/userCountrysModel.js'

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