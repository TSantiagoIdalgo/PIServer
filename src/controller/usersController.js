import User from "../models/users.js";
import __dirname from "../../index.js";

export default class UserController {
    static async getAll (_req, res) {
        try {
            const users = await User.getAllUser()
            if (users.length === 0) throw new Error('Users not found')
            res.status(200).json(users)
        } catch (error) {
            res.status(404).json({ error: error.message })
        }
    }

    static async getSingle (req, res) {
        const { id } = req.params
        try {
            const user = await User.getSingleUser(id)
            if (user === null) throw new Error('User not found')
            res.status(200).json(user)
        } catch (error) {
            res.status(404).json({ error: error.message })
        }
    }

    static async userPost (req, res) {
        const { userName, email, password } = req.body
        try {
            if (email === undefined) throw new Error('missing data')
            if (userName.length <= 3 || email.length <= 3 || password.length <= 3) {
                throw new Error('Missing data')
              }
            const newUser = await User.userPost(req)
            res.status(201).json(newUser)
        } catch (error) {
            res.status(404).json({ error: error.message })
        }
    }
    
    static async userPut (req, res) {
        const { id } = req.params
        try {
            const updatedUser = await User.userPut(id, req)
            if (updatedUser === null) throw new Error('User not found')
            res.status(202).json(updatedUser)
        } catch (error) {
            res.status(404).json({ error: error.message })
        }
    }

    static async deleteUser (req, res) {
        const { id } = req.params
        try {
            await User.deleteUser(id)
            res.sendStatus(204)
        } catch (error) {
            res.status(404).json({ error: error.message })
        }
    }

    static async getUserActivities (req, res) {
        const { id } = req.params
        try {
            const userActivities = await User.getUserActivities(id)
            if (userActivities.length === 0) throw new Error('The user has not have activities or doesn`t exist')
            res.status(200).json(userActivities)
        } catch (error) {
            res.status(404).json({ error: error.message })
        }
    }

    static async userUpload (req, res) {
        try {
            const updatedImg = await User.userUpload(req.body.email, req.file.path)
            res.status(202).json(updatedImg)
        } catch (error) {
            res.status(400).json({ error: error.message })
        }
    }
    static async getUserImage (req, res) {
        const { id } = req.params
        try {
            const user = await User.getSingleUser(id)
            res.sendFile(__dirname + user.userImg)
        } catch (error) {
            res.status(400).json({ error: error.message })
        }
    }
}