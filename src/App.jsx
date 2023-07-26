import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { Favorites } from './pages/Favorites'
import { Film } from './pages/Film'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/saveds' element={<Favorites/>}/>
        <Route path='/film/:id' element={<Film/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
