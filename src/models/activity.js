import ActivityModel from '../database/model/activityModel.js'
import Country from './country.js'
import CountryModel from '../database/model/countryModel.js'

export default class Activities {
    static async getAll () {
        const activities = await ActivityModel.findAll({include: [CountryModel]})
        return activities
    }

    static async getSingle (id) {
        const activities = await ActivityModel.findAll({
            where: {
                name: id
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

    static async put (id, req) {
        const updatedActivity = await ActivityModel.findOne({
            where: {
                name: id
            }
        })
        updatedActivity?.set(req.body)
        updatedActivity?.save()
        return updatedActivity
    }

    static async delete (id) {
        await ActivityModel.destroy({
            where: {
                name: id
            }
        })
    }
}