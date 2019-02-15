import React from 'react'

import Hamburger from '../hamburger'
import AlaskaLogo from '../../assets/alaska_logo.png'
import './header.scss'

const Header = (props) => {
  return (
    <div className='header'>
      <img src={AlaskaLogo}/>
      <Hamburger />
    </div>
  )
}

export default Header