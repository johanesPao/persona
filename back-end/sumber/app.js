const path = require('path');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const api = require('./rute/api');
require('dotenv').config();
const VERSI_API = process.env.VERSI_API;

const app = express();

const ruteTulisan = require('./rute/tulisan/tulisan.rute');

app.use(
  cors({
    // bisa menerima rekues dari berbagai origin, autentikasi dan autorisasi akan dilakukan di level api method
    origin: '*',
  }),
);
app.use(morgan('combined'));

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'publik')));

app.use(`/${VERSI_API}`, api);

app.get('/*', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '..', 'publik', 'index.html'));
});

module.exports = app;
