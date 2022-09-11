const http = require('http')

const express = require('express')

// import dotenv dan dekonstruksi variabel env
require('dotenv').config()
const { PORT, MONGO_URL } = process.env

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