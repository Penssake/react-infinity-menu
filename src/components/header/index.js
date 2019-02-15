import React from 'react'

import AlaskaLogo from '../../assets/alaska-logo.png'
import './header.scss'

const Header = (props) => {
  return (
    <div className='header'>
      <img src={AlaskaLogo}/>
    </div>
  )
}

export default Header