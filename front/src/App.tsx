import { Route, Routes } from 'react-router-dom'

import Nav from './components/Nav'
import Games from './components/Games'
import Detail from './components/Detail'
import ScrollToTop from './helpers/ScrollToTop'

export default function App() {
  return (
    <div className='bg-backcolor px-14'>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path='/' element={<Games />} />
        <Route path='/game/:id' element={<Detail />} />
        {/* <Route path="*" component={NotFound} /> */}
      </Routes>
    </div>
  )
}
