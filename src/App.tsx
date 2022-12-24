import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Nav from './Components/Nav'
import Home from './Pages/Home'
import Pricing from './Pages/Pricing'
import Contact from './Pages/Contact'

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route  path="/" element={<Home />}></Route>
        <Route  path="/pricing" element={<Pricing />}></Route>
        <Route  path="/contact" element={<Contact />}></Route>
        
      </Routes>
    </div>
  )
}

export default App
