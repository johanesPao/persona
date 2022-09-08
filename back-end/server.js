const http = require('http')

const express = require('express')
require('dotenv').config()

const app = express()

app.use('/', (req, res) => {
    return res.status(200).send('Selamat datang di persona...')
})

http.createServer(app).listen(process.env.PORT, () => {
    console.log(`Server dimulai di port ${process.env.PORT}`)
})