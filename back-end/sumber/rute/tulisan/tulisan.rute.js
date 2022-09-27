const express = require('express');

const {
  httpGetSemuaTulisan,
  httpPostTulisan,
  httpGetTulisan,
  httpHapusTulisan,
  httpEditTulisan,
} = require('./tulisan.kendali');

const ruteTulisan = express.Router();

ruteTulisan.get('/', httpGetSemuaTulisan);
ruteTulisan.get('/:id', httpGetTulisan);
ruteTulisan.post('/', httpPostTulisan);
ruteTulisan.delete('/:id', httpHapusTulisan);
ruteTulisan.post('/:id', httpEditTulisan);

module.exports = ruteTulisan;
