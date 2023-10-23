import { Router } from "express";
import ActivitiesController from "../controller/activityController.js";

const activitiesRoutes = Router()

activitiesRoutes.get('/activities', ActivitiesController.getAllActivities)

activitiesRoutes.get('/activities/:id/:userId', ActivitiesController.getSingleActivity)

activitiesRoutes.post('/activities/', ActivitiesController.postActivity)

activitiesRoutes.delete('/activities/:id/:userId', ActivitiesController.deleteActivity)

export default activitiesRoutes