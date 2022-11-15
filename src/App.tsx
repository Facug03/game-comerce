import { Route, Routes } from 'react-router-dom'

import Nav from './components/Nav'
import Games from './components/Games'
import Detail from './components/Detail'

export default function App() {
  return (
    <div className='bg-backcolor'>
      <Nav />
      <Routes>
        <Route path='/' element={<Games />} />
        <Route path='/detail' element={<Detail />} />
      </Routes>
    </div>
  )
}
