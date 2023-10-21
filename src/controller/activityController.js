import Activities from "../models/activity.js"

export default class ActivitiesController {
    static async getAllActivities (_req, res) {
        try {
            const activities = await Activities.getAll()
            if (activities.length === 0) throw new Error('there are no activities')
            res.status(200).json(activities)
        } catch (error) {
            res.status(400).json({ error: error.message })
        }
    }

    static async getSingleActivity (req, res) {
        const { id } = req.params
        try {
            const activities = await Activities.getSingle(id)
            if (activities === null) throw new Error('Activity not found')
            res.status(200).json(activities)
        } catch (error) {
            res.status(203).json({ error: error.message })
        }
    }
    
    static async postActivity (req, res) {
        try {
            if (req.body.id?.length === 0) throw new Error('The id must not be empty')
            const newActivity = await Activities.post(req)
            res.status(201).json(newActivity)
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }

    static async putActivity (req, res) {
        const { id } = req.params
        try {
            const updatedActivity = await Activities.put(id, req)
            if (updatedActivity == null) throw new Error('Activity not found')
            res.status(202).json(updatedActivity)
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }

    static async deleteActivity (req, res) {
        const { id } = req.params
        try {
            await Activities.delete(id)
            res.sendStatus(204)
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }
}