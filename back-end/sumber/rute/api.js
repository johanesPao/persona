const express = require('express')

// const rutePengguna = require('./pengguna/pengguna.rute')
const ruteTulisan = require('./tulisan/tulisan.rute')

console.log('test')

const api = express.Router()

// api.use('/pengguna', rutePengguna)
api.use('/tulisan', ruteTulisan)

module.exports = api