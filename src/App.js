import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom'
import About from './components/About'
import Admin from './components/Admin'
import Home from './components/Home'
import Rapi from './Rapi'
import Navbar from './Navbar';
import Signup from './components/Signup';
import Login from './components/Login';
import Logout from './components/Logout';
import Viewcart from './components/Viewcart';
const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} ></Route>
      <Route path='/logout' element={<Home/>} ></Route>
      <Route path='/signup' element={<Signup/>} ></Route>
      <Route path='/login' element={<Login/>} ></Route>
      <Route path='/logout' element={<Logout/>} ></Route>
      <Route path='/about' element={<About/>} ></Route>
      <Route path='/admin' element={<Admin/>} ></Route>
      <Route path='/rapi' element={<Rapi/>} ></Route>
      <Route path='/viewcart/:user' element={<Viewcart/>} ></Route>
    </Routes>
    
    </>
  )
}

export default App