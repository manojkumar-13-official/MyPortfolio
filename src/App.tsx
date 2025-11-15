import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Project from './pages/Project'
import Header from './components/Navbar'
import Contact from './pages/Contact'

const App = () => {
  return (
    <div className='bg-black min-h-screen'>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/project' element={<Project/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>  
      </Routes>
      
    </div>
  )
}

export default App
