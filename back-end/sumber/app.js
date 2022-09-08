const path = require('path')
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const api = require('./rute/api')

const app = express()

app.use(cors({
    origin: 'http://localhost:3000' // front-end
}))
app.use(morgan('combined'))

app.use(express.json())
app.use(express.static(path.join(__dirname, '..', 'publik')))

app.get('/*', (req, res) => {
    res
        .status(200)
        .sendFile(path.join(__dirname, '..', 'publik', 'index.html'))
})

module.exports = app