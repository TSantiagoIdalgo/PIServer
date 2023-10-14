import UserModel from '../database/model/userModel.js'
import ActivityModel from '../database/model/activityModel.js'
import CountryModel from '../database/model/countryModel.js'
import __dirname from '../../index.js'

export default class User {
    // Retrieves all users from the database.
    static async getAllUser () {
        const users = await UserModel.findAll()
        return users
    }

    // Retrieves a single user by primary key
    static async getSingleUser (pk) {
        const user = await UserModel.findByPk(pk)
        return user
    }

    // Creates a new user using the request body.
    static async userPost (req) {
        const newUser = await UserModel.create(req.body)
        return newUser
    }

    // Updates an existing user with the provided primary key and request body
    static async userPut (pk, req) {
        const updateUser = await UserModel.findByPk(pk)
        updateUser?.set(req.body)
        updateUser?.save()
        return updateUser
    }

    // Deletes a user with the provided primary key
    static async deleteUser (pk) {
        await UserModel.destroy({
            where: {
                email: pk
            }
        })
    }

    // Retrieves activities associated with a user with the provided ID.
    static async getUserActivities (id) {
        const activities = await ActivityModel.findAll({
            where: {
                userId: id
            },
            include: [CountryModel]
        })
        return activities
    }

    static async userUpload (pk, path) {
        const updateUser = await UserModel.findByPk(pk)
        updateUser.userImg = '\\' + path
        updateUser.save()
        return updateUser
    }
}