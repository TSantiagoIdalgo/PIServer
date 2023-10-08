import UserModel from '../database/model/userModel.js'
import ActivityModel from '../database/model/activityModel.js'
import CountryModel from '../database/model/countryModel.js'

export default class User {
    static async getAllUser () {
        const users = await UserModel.findAll()
        return users
    }

    static async getSingleUser (pk) {
        const user = await UserModel.findByPk(pk)
        return user
    }

    static async userPost (req) {
        const newUser = await UserModel.create(req.body)
        return newUser
    }

    static async userPut (pk, req) {
        const updateUser = await UserModel.findByPk(pk)
        updateUser?.set(req.body)
        updateUser?.save()
        return updateUser
    }

    static async deleteUser (pk) {
        await UserModel.destroy({
            where: {
                email: pk
            }
        })
    }

    static async getUserActivities (id) {
        const activities = await ActivityModel.findAll({
            where: {
                userId: id
            },
            include: [CountryModel]
        })
        return activities
    }
}