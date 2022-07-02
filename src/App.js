import React from 'react'
import Home from './Home'
import NavBar from './components/NavBar'
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import About from './pages/About';
import Page404 from './pages/Page404';


function App() {
  return (
    <>
      <div>
      <BrowserRouter>

      <NavBar></NavBar> 
      <Routes>
        <Route path='/about' element={<About></About>}/>
        <Route path='/' element={<Home style={{hight: '10px'}}></Home>}/>
        <Route path='*' element={<Page404/>}/>
        {/* <Route path='*' element={<Navigate to="/"></Navigate>}/> */}
        
      </Routes>
      </BrowserRouter>
      </div>
    </>
  )
}

export default App