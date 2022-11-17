import express from 'express'
import pruebaRouter from './routes/prueba'

const PORT = 3001
const expressApp = express()

expressApp.use(express.json())

expressApp.use('/prueba', pruebaRouter)

expressApp.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`)
})
