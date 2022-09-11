const http = require('http')

const express = require('express')

// import dotenv dan dekonstruksi variabel env
require('dotenv').config()
const PORT = process.env.PORT

const app = require('./app')
const { mongoConnect } = require('./layanan/mongo')
const { muatDataTulisan } = require('./model/tulisan/tulisan.model')

const server = http.createServer(app)

async function mulaiServer() {
    /*
    fungsi yang perlu diload sebelum server memulai listen
    */
   await mongoConnect()
   await muatDataTulisan()

    server.listen(PORT, () => {
        console.log(`Server berjalan di port ${PORT}`)
    })
}

mulaiServer()