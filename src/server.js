import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import userRoutes from './routes/routesUsers'
import countryRoutes from './routes/contryRoutes'
import activitiesRoutes from './routes/activitiesRoutes'

const server = express()

server.use(morgan('dev'))
server.use(express.json())
server.use(cors())
server.use(express.urlencoded({ extended: true }))

server.use(userRoutes)
server.use(countryRoutes)
server.use(activitiesRoutes)

export default server