import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import Header from '../header'
import Landing from '../landing'
import Nav from '../navContainer'
import {data} from '../../data/nav-data'
import Hamburger from '../hamburger'

import './app.scss'

const App = (props) => {
  return (
    <BrowserRouter>
      <div>
        <div className='app-overlay'><h1>Currently only meant to size to 700px</h1></div>
        <div className='app'>
          <Header />
          <Hamburger />
          <Nav data={data} />
          <Route exact path='/' component={Landing}></Route>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App