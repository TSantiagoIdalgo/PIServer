import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import userRoutes from './routes/routesUsers.js'
import countryRoutes from './routes/contryRoutes.js'
import activitiesRoutes from './routes/activitiesRoutes.js'

const server = express()

server.use(morgan('dev'))
server.use(express.json())
server.use(cors())
server.use(express.urlencoded({ extended: true }))

server.use(userRoutes)
server.use(countryRoutes)
server.use(activitiesRoutes)

export default server