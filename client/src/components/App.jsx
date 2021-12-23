import React, { useEffect, useState } from "react";
import { getTransactions } from "./util";
import TransactionList from "./TransactionList.jsx";


const App = () => {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    getTransactions((data) => {
      setTransactions(data);
    })
  }, []);

  return (
    <div>
      <h1>BuildMyBudget</h1>
      <div className="app">
        <TransactionList transactions={transactions} />
        <div className="category">
          <h3>Budget Categories</h3>
          {/* <CategoryList />
          <CategoryForm /> */}
        </div>
      </div>
    </div>
  );
}

export default App;

