import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

const server = express()

server.use(morgan('dev'))
server.use(express.json())
server.use(cors())
server.use(express.urlencoded({ extended: true }))

export default server