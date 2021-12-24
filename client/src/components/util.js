import axios from "axios";

export function getTransactions(callback) {
  axios.get('/api/transactions')
    .then((res) => {
      callback(res.data);
    }).catch(err => console.log(err));
};

export function getCategories(callback) {
  axios.get('/api/categories')
    .then((res) => {
      callback(res.data);
    }).catch(err => console.log(err));
};

