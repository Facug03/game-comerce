import { api } from '../api'

export default function Games() {
  return (
    <article className='mt-4 px-11 font-bold'>
      <div className='my-4 flex justify-between items-center'>
        <h2 className='text-2xl text-gray-900'>Tendencias</h2>
        <button className=' text-btn border-2 border-btn py-1 px-4 rounded-sm'>
          ver más
        </button>
      </div>
      <div className='grid gap-6 grid-cols-4'>
        {api.map((game) => (
          <div
            className={`h-auto cursor-pointer  overflow-hidden rounded-sm shadow-sm ${
              api[0].name === game.name && 'col-span-2 row-span-2 self-center'
            }`}
            key={game.name}
          >
            <img
              className='hover:scale-110 hover:brightness-75 transition ease-in-out duration-500'
              src={game.img}
              alt={game.name}
            />
            <div className='h-14 w-full bottom-0 relative bg-card z-50 flex py-1 px-2 justify-between items-center'>
              <div>
                <h4 className='text-gray-900 font-bold text-sm mb-1'>
                  {game.name}
                </h4>
                <svg width='12px' height='12px' viewBox='0 0 256 257'>
                  <g>
                    <path
                      d='M0,36.3573818 L104.619084,22.1093454 L104.664817,123.02292 L0.0955693151,123.618411 L0,36.3573818 Z M104.569248,134.650129 L104.650452,235.651651 L0.0812046021,221.274919 L0.0753414539,133.972642 L104.569248,134.650129 Z M117.25153,20.2454506 L255.967753,6.21724894e-15 L255.967753,121.739477 L117.25153,122.840723 L117.25153,20.2454506 Z M256,135.599959 L255.96746,256.791232 L117.251237,237.213007 L117.056874,135.373055 L256,135.599959 Z'
                      fill='#2c2c2c'
                    ></path>
                  </g>
                </svg>
              </div>
              <div className=' py-1 px-4'>
                <p className='text-gray-900 text-sm font-bold'>${game.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </article>
  )
}
//341
