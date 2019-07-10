// header file to import express
const express = require('express')

// creating express instance
const app = express()

const port = 4200

let userName = "Vaibhav Udaywal"

let responseFunction = (req, res) => res.send(`Hey ${userName}!`)

app.get('/', responseFunction)

let messageToShow = () => console.log(`listening the server on port ${port}`)

// listening the server
app.listen(port, messageToShow)