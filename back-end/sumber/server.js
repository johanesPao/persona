const http = require('http')

const express = require('express')

require('dotenv').config()
const PORT = process.env.PORT

const app = require('./app')

const server = http.createServer(app)

async function mulaiServer() {
    /*
    fungsi yang perlu diload sebelum server memulai listen
    */

    server.listen(PORT, () => {
        console.log(`Server berjalan di port ${PORT}`)
    })
}

mulaiServer()