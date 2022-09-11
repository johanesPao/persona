const express = require('express')

const { httpGetSemuaTulisan } = require('./tulisan.kendali')

const ruteTulisan = express.Router()

ruteTulisan.get('/', httpGetSemuaTulisan)

module.exports = ruteTulisan