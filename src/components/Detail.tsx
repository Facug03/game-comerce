import { api } from '../api'

export default function Detail() {
  return (
    <>
      <div className='bg-backcolor p-11 flex gap-3'>
        <div className='flex-1'>
          <img
            className='w-1/2 rounded-sm'
            src={api[0].img}
            alt={api[0].name}
          />
          <p>Carrusel</p>
          <h2>{api[0].name}</h2>
          <p className='text-2xl text-amber-400'>
            ★★★★☆ <span className='text-black text-sm'>4/5</span>
          </p>
          <p>
            {api[0].genre.map((genre) => (
              <span className='text-sm'>{genre}</span>
            ))}
          </p>
          <p className='text-sm'>
            Funciona en:
            {api[0].sistem.map((sistem) => (
              <span className='text-sm m-1'>{sistem}</span>
            ))}
          </p>
        </div>
        <div className='flex-mid'>Compra</div>
      </div>
      <div className='px-11 w-3/4'>
        <h3 className='text-2xl'>Descripcion</h3>
        <p className='text-justify'>{api[0].description}</p>
        <h3>Detalles del producto</h3>
      </div>
    </>
  )
}
