import { Router } from "express";
import ActivitiesController from "../controller/activityController.js";

const activitiesRoutes = Router()

activitiesRoutes.get('/activities', ActivitiesController.getAllActivities)

activitiesRoutes.get('/activities/:id', ActivitiesController.getSingleActivity)

activitiesRoutes.post('/activities/', ActivitiesController.postActivity)

activitiesRoutes.delete('/activities/:id', ActivitiesController.deleteActivity)

export default activitiesRoutes