import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import Header from '../header'
import Landing from '../landing'
import Nav from '../navContainer'
import {data} from '../../data/nav-data'
import Hamburger from '../hamburger'

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app'>
        <Header />
        <Hamburger />
        <Nav data={data} />
        <Route exact path='/' component={Landing}></Route>
      </div>
    </BrowserRouter>
  )
}

export default App