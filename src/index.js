import React from 'react'
import ReactDom from 'react-dom'

import App from './components/app'
import './styles/main.scss'

const appRoot = document.getElementById('root')

ReactDom.render(
  <App />, appRoot)