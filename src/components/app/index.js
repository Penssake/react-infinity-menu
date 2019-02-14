import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import Landing from '../landing'
import Nav from '../navContainer'
import {data} from '../../data/nav-data'

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app'>
        <Nav data={data} />
        <Route exact path='/' component={Landing}></Route>
      </div>
    </BrowserRouter>
  )
}

export default App