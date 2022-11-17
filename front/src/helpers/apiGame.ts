import axios from 'axios'
import { GameType } from './types'

export const getTrendingGames = (): Promise<GameType[]> => {
  const games = axios
    .get('http://localhost:3001/game/trending')
    .then((res) => res.data)
  return games
}

export const getGame = (id: string | undefined): Promise<GameType> => {
  const game = axios
    .get(`http://localhost:3001/game/${id}`)
    .then((res) => res.data)
  return game
}
