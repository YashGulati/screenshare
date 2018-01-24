"use strict";
const express = require('express')
const app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.set('view engine', 'ejs')
let code1 = ''
let code2 = ''
app.get('/1', (req, res) => {
    console.log('client handled with code::', code1)
    return res.render('index', {code:code1} )
})
app.get('/2', (req, res) => {
    console.log('client handled with code::', code2)
    return res.render('index', {code:code2} )
})
app.get('/p', (req, res) => {
  return res.render('presenter', {id: 'p'})
})
app.get('/q', (req, res) => {
  return res.render('presenter', {id: 'q'})
})
app.post('/code', (req, res) => {
  console.log('req.body', req.body);
  if (req.body.id == 'p') code1 = req.body.code
  else if (req.body.id == 'q') code2 = req.body.code
  return res.send({status: 'success'})
})
app.use(express.static('dist'))
app.listen(80, () => console.log('Example app listening on port 80!'))
