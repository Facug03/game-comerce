import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

import gameRouter from './routes/game.js'

dotenv.config()

const PORT = 3001
const expressApp = express()

expressApp.use(express.json())
expressApp.use('/game', gameRouter)

const bootstrap = async () => {
  await mongoose.connect(process.env.MONGODB_URL)

  expressApp.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
  })
}

bootstrap()
