import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <header className='p-3'>
      <nav className='bg-nav rounded-md flex justify-between items-center p-3'>
        <Link to='/'>
          <h3 className='text-white font-uBold font-extrabold'>GAMESHOP</h3>
        </Link>
        <div className='flex items-center'>
          <input
            className='w-56 h-10 outline-none bg-transparent text-slate-100 border-b-1 p-3'
            placeholder='Search Game'
          />
          <button className='h-10 w-12 '>
            <svg
              fill='#ffffff'
              className='w-4 m-auto h-full'
              viewBox='0 0 487.95 487.95'
            >
              <g>
                <g>
                  <path
                    d='M481.8,453l-140-140.1c27.6-33.1,44.2-75.4,44.2-121.6C386,85.9,299.5,0.2,193.1,0.2S0,86,0,191.4s86.5,191.1,192.9,191.1
			c45.2,0,86.8-15.5,119.8-41.4l140.5,140.5c8.2,8.2,20.4,8.2,28.6,0C490,473.4,490,461.2,481.8,453z M41,191.4
			c0-82.8,68.2-150.1,151.9-150.1s151.9,67.3,151.9,150.1s-68.2,150.1-151.9,150.1S41,274.1,41,191.4z'
                  />
                </g>
              </g>
            </svg>
          </button>
        </div>
        <div className='flex items-center'>
          <svg
            className='text-slate-100'
            viewBox='0 0 32 32'
            fill='none'
            stroke='#fff'
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2'
            width='24'
            height='24'
          >
            <path d='M6 6 L30 6 27 19 9 19 M27 23 L10 23 5 2 2 2' />
            <circle cx='25' cy='27' r='2' />
            <circle cx='12' cy='27' r='2' />
          </svg>
          <svg viewBox='0 0 500 500' fill='#fff' width='34' height='34'>
            <g>
              <g>
                <path d='M250,291.6c-52.8,0-95.8-43-95.8-95.8s43-95.8,95.8-95.8s95.8,43,95.8,95.8S302.8,291.6,250,291.6z M250,127.3    c-37.7,0-68.4,30.7-68.4,68.4s30.7,68.4,68.4,68.4s68.4-30.7,68.4-68.4S287.7,127.3,250,127.3z' />
              </g>
              <g>
                <path d='M386.9,401.1h-27.4c0-60.4-49.1-109.5-109.5-109.5s-109.5,49.1-109.5,109.5h-27.4c0-75.5,61.4-136.9,136.9-136.9    S386.9,325.6,386.9,401.1z' />
              </g>
            </g>
          </svg>
        </div>
      </nav>
    </header>
  )
}
