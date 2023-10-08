import UserModel from '../model/userModel.js'
import CountryModel from '../model/countryModel.js'
import ActivityModel from '../model/activityModel.js'
import UserCountrysAndActivitysModel from '../model/userCountrysModel.js'

CountryModel.belongsToMany(ActivityModel, { 
    through: UserCountrysAndActivitysModel,
    as: 'countryActivities'
})

ActivityModel.belongsToMany(CountryModel, { 
    through: UserCountrysAndActivitysModel,
    as: 'activitiesCountry'
})

UserModel.hasMany(UserCountrysAndActivitysModel, {
    foreignKey: 'userId',
    sourceKey: 'email',
})

UserCountrysAndActivitysModel.belongsTo(UserModel, {
    foreignKey: 'userId',
    targetKey: 'email',
})