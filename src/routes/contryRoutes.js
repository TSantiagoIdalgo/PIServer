import { Router } from "express";
import CountryController from "../controller/countryController.js";

const countryRoutes = Router()

countryRoutes.get('/country', CountryController.getAll)
countryRoutes.get('/country/:id', CountryController.getSingleCountry)

export default countryRoutes