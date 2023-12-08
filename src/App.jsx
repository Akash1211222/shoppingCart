import './App.css'
import Navbar from './components/Navbar'
import Cart from './pages/Cart'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'

function App() {
  

  return (
    <>
      <div>
        <Navbar/>
      </div>
      <Routes>
        <Route path ="/" element={<Home/>}/>
        <Route path ="/cart" element={<Cart/>}/>
      </Routes>
    </>
  )
}

export default App
