import ActivityModel from '../database/model/activityModel.js'
import Country from './country.js'
import CountryModel from '../database/model/countryModel.js'

export default class Activities {
    static async getAll () {
        const activities = await ActivityModel.findAll({include: [CountryModel]})
        return activities
    }

    static async getSingle (id, userId) {
        const activities = await ActivityModel.findOne({
            where: {
                name: id,
                userId: userId
            },
            include: [CountryModel]
        })
        return activities
    }

    static async post (req) {
        const { id, name, difficulty, duration, season, userId} = req.body
        const newActivity = await ActivityModel.create({
            name,
            difficulty,
            duration,
            season,
            userId
        })
        
        for (const item of id) {
            const country = await Country.getSingle(item)
            await newActivity.addCountries(country)
        }

        return newActivity
    }

    static async delete (id, userId) {
        await ActivityModel.destroy({
            where: {
                name: id,
                userId: userId
            }
        })
    }
}