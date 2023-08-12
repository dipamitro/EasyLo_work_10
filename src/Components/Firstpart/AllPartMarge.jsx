import React from 'react'
import Heroall from './Heroall'
import Secondall from '../Secondpart/Secondall'
import Specialties from '../Fourthpart/Specialties'
import Chef from '../Fifthpart/Chef'
import Service from '../Thirdpart/Service'
import MakeReservation from '../Sixthpart/MakeReservation'
import Happycustomer from '../Saventhpart/Happycustomer'
import Blog from '../Eightpart/Blog'
import Footer from '../Ninethpart/Footer'

function AllPartMarge() {
  return (
    <div>
        <Heroall />
        <Secondall />
       <Service />
        <Specialties />
        <Chef />
        <MakeReservation />
        <Happycustomer />
        <Blog />
        <Footer />


    </div>
  )
}

export default AllPartMarge