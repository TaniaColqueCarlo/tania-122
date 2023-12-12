import { Routes, Route } from 'react-router-dom'
import Bienvenida from './paginas/Bienvenida'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import PaginaLenguaje from './paginas/PaginaLenguaje'
import SobreMi from './paginas/SobreMi'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route index={true} element={<Bienvenida />} />
        <Route path='lenguaje/:id' element={<PaginaLenguaje />} />
        <Route path='about' element={<SobreMi />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App