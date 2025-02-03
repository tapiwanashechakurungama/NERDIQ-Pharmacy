import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Prescriptions from './pages/Prescriptions'
import { NavbarComponent }from './components/Navbar'
import Contact from './pages/Contact'
import { Footer } from './components/Footer'

function App() {


  return (
    <>
     <BrowserRouter>
     <NavbarComponent></NavbarComponent>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/products' element={<Products/>}></Route>
      <Route path='/prescriptions' element={<Prescriptions/>}></Route>
     </Routes>
     <Footer/>
     </BrowserRouter>
    </>
  )
}

export default App
