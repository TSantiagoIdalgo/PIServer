import { Router } from "express";
import UserController from "../controller/usersController.js";

const userRoutes = Router()

userRoutes.get('/users', UserController.getAll)
userRoutes.post('/users', UserController.userPost)
userRoutes.post('/users/upload', UserController.userUpload)
userRoutes.get('/users/image/:id', UserController.getUserImage)
userRoutes.get('/users/:id', UserController.getSingle)
userRoutes.put('/users/:id', UserController.userPut)
userRoutes.delete('/users/:id', UserController.deleteUser)
userRoutes.get('/users/:id/activities', UserController.getUserActivities)

export default userRoutes