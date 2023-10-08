import Countries from '../models/countries.js'

export default class CountriesController {
    static async getCountries (_req, res) {
        try {
            const countries = await Countries.getAllCountries()
            res.status(200).json(countries)
        } catch (error) {
            res.status(400).json({ error: error.message })
        }
    }
}