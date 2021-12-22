require('dotenv').config();
const express = require('express');
const db = require('../database');
const app = express();
const PORT = process.env.PORT || 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../client/dist'));
app.get('/', (req, res) => {
  res.send('hello world');
})
app.listen(PORT, () => {
  console.log(`listening at http://localhost:3000`);
})