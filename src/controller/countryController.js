import Country from "../models/country.js";

export default class CountryController {
    static async getAll (req, res) {
        try {
            const countries = await Country.getAll(req.query)
            if (countries.length === 0) throw new Error('Country not found')
            res.status(200).json(countries)
        } catch (error) {
            res.status(400).json({ error: error.message })
        }
    }
    
    static async getSingleCountry (req, res) {
        const { id } = req.params
        try {
            const country = await Country.getSingle(id);
            if (country === null) throw new Error('Country not found')
            res.status(200).json(country)
        } catch (error) {
            res.status(400).json({ error: error.message })
        }
    }
}