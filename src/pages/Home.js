import React from 'react'
import first from '../pages/img/first.png'
import Home from '../pages/Style/Home/Home.scss'


function home() {
  return (
    <div>
          <h1 element={Home}>A flavour for all <br />seasons</h1>
     <img className='first' src={first} alt='' srcSet=''/>
    </div>
  )
}

export default home
