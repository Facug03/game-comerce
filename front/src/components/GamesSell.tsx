import { useQuery } from '@tanstack/react-query'

import { getTrendingGames } from '../helpers/apiGame'
import Game from './Game'

export default function GamesSell() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['games'],
    queryFn: getTrendingGames,
  })

  if (isLoading) {
    return <div>Cargando...</div>
  }

  if (isError) {
    return <div>Error</div>
  }

  return (
    <article className='mt-6 font-bold mb-12'>
      <div className='my-4 flex justify-between items-center'>
        <h2 className='text-2xl font-uBold text-gray-900'>Mas vendidos</h2>
        <button className='text-btn border-2 border-btn py-1 px-4 rounded-sm'>
          ver más
        </button>
      </div>
      <div className='grid gap-6 grid-cols-3 mb-6'>
        {data.slice(0, 3).map((game) => (
          <div
            className='h-auto cursor-pointer  overflow-hidden shadow-sm'
            key={game.name}
          >
            <Game
              _id={game._id}
              name={game.name}
              price={game.price}
              img={game.img}
            />
          </div>
        ))}
      </div>
      <div className='grid gap-6 grid-cols-2'>
        {data.slice(3, 5).map((game) => (
          <div
            className={`h-auto cursor-pointer overflow-hidden rounded-sm shadow-sm`}
            key={game.name}
          >
            <Game
              _id={game._id}
              name={game.name}
              price={game.price}
              img={game.img}
            />
          </div>
        ))}
      </div>
    </article>
  )
}
