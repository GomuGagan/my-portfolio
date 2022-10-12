import React from 'react'
import About from './components/About'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Skills from './components/Skills'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
    </div>
  )
}

export default App