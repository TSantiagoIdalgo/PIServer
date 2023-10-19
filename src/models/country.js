import CountryModel from '../database/model/countryModel.js'
import ActivityModel from '../database/model/activityModel.js'

export default class Country {
    static async getAll (req) {
        const country = await CountryModel.findAll()
        if (Object.values(req).length > 0) {
            const countries = country.filter((c) => {
                const name = req.name.toLowerCase()
                return c.dataValues.name.toLowerCase().includes(name)
            })
            return countries
        }
        
        return country
    }

    static async getSingle (id) {
        const country = await CountryModel.findByPk(id, {include: [ActivityModel]})
        return country
    }
    
}