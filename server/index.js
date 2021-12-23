require('dotenv').config();
const express = require('express');
const db = require('../database');
const app = express();
const PORT = process.env.PORT || 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../client/dist'));

app.get('/api/transactions', (req, res) => {
  db.getAllReciepts((data) => {
    res.send(data);
    console.log(data);
  })
})

app.get('/api/categories', (req, res) => {
  db.getCategories((data) => {
    res.send(data);
    console.log(data);
  })
})

app.post('/api/categories', (req, res) => {
  const {description, amount} = req.body;
  db.addCategory([description, amount], (data) => {
    console.log(data);
    res.end(JSON.stringify(data));
  })
})

app.listen(PORT, () => {
  console.log(`listening at http://localhost:3000`);
})