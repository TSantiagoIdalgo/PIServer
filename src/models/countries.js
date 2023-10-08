import ConnModel from '../database/model/countriesModel.js'

export default class Countries {
    static async getAllCountries () {
        const countries = await ConnModel.findByPk(1)
        return countries
    }
}