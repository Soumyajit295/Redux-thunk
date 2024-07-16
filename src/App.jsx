import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Allproducts from './components/Allproducts'
import SingleProduct from './components/SingleProduct'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Allproducts/>}/>
          <Route path='product/:id' element={<SingleProduct/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
