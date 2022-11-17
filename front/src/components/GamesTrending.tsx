import { useQuery } from '@tanstack/react-query'

import { getTrendingGames } from '../helpers/apiGame'
import Game from './Game'

export default function GamesTrending() {
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
    <article className='font-bold'>
      <div className='mb-4 flex justify-between items-center'>
        <h2 className='text-2xl font-uBold text-gray-900'>Tendencias</h2>
        <button className='text-btn border-2 border-btn py-1 px-4 rounded-sm'>
          ver más
        </button>
      </div>
      <div className='grid gap-6 grid-cols-4'>
        {data.map((game) => (
          <div
            className={`h-auto cursor-pointer  overflow-hidden rounded-sm  ${
              data[0].name === game.name && 'col-span-2 row-span-2 self-center'
            }`}
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
