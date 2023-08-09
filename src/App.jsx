import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faCheck, faTimes);
import './App.css'
import Heroall from './Components/Firstpart/Heroall'
import Secondall from './Components/Secondpart/Secondall'
import Service from './Components/Thirdpart/Service'
import Specialties from './Components/Fourthpart/Specialties';
import Chef from './Components/Fifthpart/Chef';
import MakeReservation from './Components/Sixthpart/MakeReservation';
import Happycustomer from './Components/Saventhpart/Happycustomer';
import Blog from './Components/Eightpart/Blog';
import Footer from './Components/Ninethpart/Footer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Heroall />
    <Secondall />
    <Service />
    <Specialties />
    <Chef />
    <MakeReservation />
    <Happycustomer />
    <Blog />
    <Footer />

      
    </>
  )
}

export default App
