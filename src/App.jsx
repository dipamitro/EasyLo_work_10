import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faCheck, faTimes);
import './App.css'
import { Route, Routes } from 'react-router-dom';
import AllPartMarge from './Components/Firstpart/AllPartMarge';
import Login from './PageRealatToAdmin/Login/Login';
import AdminDeshBoard from './PageRealatToAdmin/AdminDeshBoard/AdminDeshBoard';
import AdminSideBar from './PageRealatToAdmin/AdminDeshBoard/AdminSideBar';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Routes>
   <Route path='/' element={<AllPartMarge />}></Route>
   <Route path='/logIn' element={<Login />}></Route>
   <Route path='/adminDeshBoard' element={<AdminDeshBoard />}></Route>
   <Route path='/adminSideBar' element={<AdminSideBar />}></Route>
    
   </Routes>

      
    </>
  )
}

export default App
