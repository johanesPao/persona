const express = require('express');

const {
  httpGetSemuaTulisan,
  httpPostTulisan,
  httpGetTulisan,
} = require('./tulisan.kendali');

const ruteTulisan = express.Router();

ruteTulisan.get('/', httpGetSemuaTulisan);
ruteTulisan.get('/:id', httpGetTulisan);
ruteTulisan.post('/', httpPostTulisan);

module.exports = ruteTulisan;
