import React from "react";

const TransactionList = ({ transactions, categories }) => {
  return (
    <div className="txn">
      <h3>Transactions</h3>
      <div className="txn-table">
        <div className="txn-header txn-row">
          <div className="txn-data">Date</div>
          <div className="txn-data">Description</div>
          <div className="txn-data">Amount</div>
          {categories.length !== 0 ? (
            <div className="txn-data">Category</div>
          ) : null}
        </div>
        {transactions.map((transaction) => {
          return (
            <div className="txn-row" key={transaction.id}>
              <div className="txn-data" className="date">
                {transaction.date.toString().slice(0, 10)}
              </div>
              <div className="txn-data" className="description">
                {transaction.description}
              </div>
              <div className="txn-data" className="amount">
                {transaction.amount}
              </div>
              <div className="txn-data" className="category">
                <select>
                  <option value="none" selected disabled hidden>
                    Add a category
                  </option>
                  {categories.length !== 0
                    ? categories.map((category) => {
                        return (
                          <option className="category-title">{category}</option>
                        );
                      })
                    : null}
                </select>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TransactionList;
