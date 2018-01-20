"use strict";
const express = require('express')
const app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.set('view engine', 'ejs')
let code = ''

app.get('/', (req, res) => {
    console.log('client handled with code::', code)
    return res.render('index', {code:code} )
})

app.get('/p', (req, res) => {
  return res.render('presenter')
})
app.post('/code', (req, res) => {
  console.log('req.body', req.body);
  code = req.body.code
  console.log('code changed::', code);
  return res.send({status: 'success'})
})
app.use(express.static('dist'))
app.listen(80, () => console.log('Example app listening on port 80!'))
