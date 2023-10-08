import sequelize from "../db.js";
import User from './user.js'
import Country from './country.js'
import Activity from './activity.js'

const UserCountrysAndActivitys = sequelize.define('userCountries', {}, {timestamps:false})

Country.belongsToMany(Activity, { 
    through: UserCountrysAndActivitys,
    as: 'countryActivities'
})

Activity.belongsToMany(Country, { 
    through: UserCountrysAndActivitys,
    as: 'activitiesCountry'
})

User.hasMany(UserCountrysAndActivitys, {
    foreignKey: 'userId',
    sourceKey: 'email',
})

UserCountrysAndActivitys.belongsTo(User, {
    foreignKey: 'userId',
    targetKey: 'email',
})

export default UserCountrysAndActivitys
