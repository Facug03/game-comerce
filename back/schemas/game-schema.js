import mongoose from 'mongoose'

const gameSchema = mongoose.Schema({
  name: String,
  price: Number,
  img: String,
  description: String,
  rating: Number,
  genre: Array,
  system: Array,
  year: String,
  developer: String,
})

const gameModel = mongoose.model('Game', gameSchema)

export default gameModel
