import { Router } from "express";
import CountriesController from "../controller/countriesController.js";

const countriesRoutes = Router()

countriesRoutes.get('/countries', CountriesController.getCountries)

export default countriesRoutes