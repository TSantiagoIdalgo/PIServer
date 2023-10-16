import bcrypt from 'bcrypt'
import Jwt  from 'jsonwebtoken'
import dotenv from 'dotenv';
import UserModel from '../database/model/userModel.js'
import ActivityModel from '../database/model/activityModel.js'
import CountryModel from '../database/model/countryModel.js'
dotenv.config()

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
        const { userName, email, password } = req.body
        const saltsRound = 10
        const passwordHash = await bcrypt.hash(password, saltsRound)
        const newUser = await UserModel.create({
        userName,
        email,
        passwordHash
        })
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

    static async userLogin (req) {
      const { email, password } = req.body
      const user = await UserModel.findByPk(email)
      const passwordCorrect = user === null
       ? false
       : await bcrypt.compare(password, user.dataValues.passwordHash)
      if (!passwordCorrect) throw new Error('Invalid user or password')
        const userToken = {
            id: user?.dataValues.id,
            email: user?.dataValues.email
        }

      const token = Jwt.sign(userToken, process.env.SECRET)
      return { ...user?.dataValues, token }
    }
}