import React from "react"
import Navbar from './pages/components/Navbar'
import { BrowserRouter } from 'react-router-dom'
import AnimateRoutes from './pages/Animatepresence'

function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <AnimateRoutes />
      </BrowserRouter>
    </div>
  )
}

export default App
