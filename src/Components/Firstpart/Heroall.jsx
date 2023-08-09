import React from 'react'
import Hero from './Hero'
import Heroback from './Heroback'
import Nav from './Nav'
import Food from './Food'
import './Heroall.css'

function Heroall() {
  return (
    <div>

        <div className='forback'>
        <Hero />
        <Nav />
        
        <Food />
        </div>
       

    </div>
  )
}

export default Heroall