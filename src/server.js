import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import upload from './models/upload.js'

const server = express()

server.use(morgan('dev'))
server.use(express.json())
server.use(cors())
server.use(express.urlencoded({ extended: true }))
server.use(upload.single('file'))
server.use(express.static('public'))

export default server