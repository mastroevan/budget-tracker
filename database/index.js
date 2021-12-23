const mysql = require('mysql');
const mysqlConfig = require('./config.js');
const connection = mysql.createConnection(mysqlConfig);

connection.connect((err) => {
  if (err) throw err;
})

const getAllReciepts = function(callback) {
  connection.query(`Select * from transactions`, (err, data) => {
    if (err) throw err;
    console.log(data);
    callback(data);
  })
};

const getCategories = function(callback) {
  connection.query('Select * from categories', (err, data) => {
    if (err) throw err;
    console.log(data);
    callback(data);
  })
};

const addCategory = function(values, callback) {
  connection.query('INSERT INTO categories (description, amount) VALUES (?, ?)', values, (err, data) => {
    if (err) throw err;
    console.log(data);
    callback(data);
  })
};

module.exports.getAllReciepts = getAllReciepts;
module.exports.getCategories = getCategories;
module.exports.addCategory = addCategory;