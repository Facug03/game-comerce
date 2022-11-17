import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { getGame } from '../helpers/apiGame'

export default function Detail() {
  const { id } = useParams()
  const {
    data: game,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['game', id],
    queryFn: () => getGame(id),
    refetchInterval: 0,
    refetchIntervalInBackground: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    retry: 2,
    staleTime: 0,
    cacheTime: 20000,
  })

  if (isLoading) {
    return <div className='h-screen'>Cargando...</div>
  }

  if (isError) {
    return <div>Error</div>
  }

  return (
    <>
      <div className='bg-backcolor py-11 flex gap-3'>
        <div className='flex-1'>
          <img
            className='w-1/2 rounded-sm mx-auto'
            src={game.img}
            alt={game.name}
          />
          <p>Carrusel</p>
          <h2 className='font-uBold text-3xl text-gray-800 my-3'>
            {game.name}
          </h2>
          <div className='flex items-center mb-2'>
            <span className='text-lg text-gray-900 mr-4'>
              ⭐ {game.rating}/5
            </span>
            <span>
              <svg
                className='inline'
                width='14px'
                height='14px'
                viewBox='0 0 256 257'
              >
                <g>
                  <path
                    d='M0,36.3573818 L104.619084,22.1093454 L104.664817,123.02292 L0.0955693151,123.618411 L0,36.3573818 Z M104.569248,134.650129 L104.650452,235.651651 L0.0812046021,221.274919 L0.0753414539,133.972642 L104.569248,134.650129 Z M117.25153,20.2454506 L255.967753,6.21724894e-15 L255.967753,121.739477 L117.25153,122.840723 L117.25153,20.2454506 Z M256,135.599959 L255.96746,256.791232 L117.251237,237.213007 L117.056874,135.373055 L256,135.599959 Z'
                    fill='#2c2c2c'
                  ></path>
                </g>
              </svg>
            </span>
          </div>
          {/* <span className='text-black text-sm'>{game.rating}/5</span> */}
          <p>
            {game.genre.map((genre) => (
              <span className='text-sm'>{genre}</span>
            ))}
          </p>
        </div>
        <div className='flex-mid flex items-center border-2'>
          <div className='h-2/4 border-2 w-full p-4'>
            <p className='text-2xl'>${game.price} ARS</p>
            <button className='block'>Comprar ahora</button>
            <button className='block'>Agregar al carrito</button>
          </div>
        </div>
      </div>
      <div className='w-3/4'>
        <h3 className='text-2xl'>Descripcion</h3>
        <p className='text-justify'>{game.description}</p>
        <h3 className=''>Detalles del producto</h3>
      </div>
    </>
  )
}
