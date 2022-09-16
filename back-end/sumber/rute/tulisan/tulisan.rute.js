const express = require('express');

const { httpGetSemuaTulisan, httpPostTulisan } = require('./tulisan.kendali');

const ruteTulisan = express.Router();

ruteTulisan.get('/', httpGetSemuaTulisan);
ruteTulisan.post('/', httpPostTulisan);

module.exports = ruteTulisan;
