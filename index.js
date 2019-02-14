'use strict'

require('dotenv').config()
const express = require('express')
const PORT = process.env.PORT || 5000
express()
  .use(require('morgan')('common'))
  .use(express.static(`${__dirname}/build`))
  .get('*', (req, res) => res.sendFile(`${__dirname}/build/index.html`))
  .listen(PORT, () => {
    console.log('server up', PORT)
  })