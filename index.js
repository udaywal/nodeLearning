// header file - needed to import 'expressjs' into application
const express = require('express')
const appConfig = require('./config/appConfig')

// declareing an instance or creating an application instance
const app = express()

let helloWorldFunction = (req, res) => res.send('Hello World!') // '(res,req)' are parameters from express
app.get('/', helloWorldFunction)

/* another approach - you can use it like this
app.get('/', (req, res) => res.send('Hello World!') */

// litening the server on a port
app.listen(appConfig.port, () => console.log(`Example app listening on port ${appConfig.port}!`))