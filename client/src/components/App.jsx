import React from "react";
import TransactionList from "./TransactionList.jsx";
import axios from "axios";
import CategoryList from "./CategoryList.jsx";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: [],
      categories: [],
      description: "",
      amount: 0,
    };
    this.addCategory = this.addCategory.bind(this);
    this.resetInputs = this.resetInputs.bind(this);
  }

  fetchTransactions = () => {
    axios
      .get("http://localhost:3000/api/transactions")
      .then((res) => {
        this.setState({ transactions: res.data });
      })
      .catch();
  };

  onChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
    console.log(this.state);
  };

  addCategory = (e) => {
    e.preventDefault();
    const data = {
      description: this.state.description,
      amount: this.state.amount,
    };
    const options = {
      method: "POST",
      url: "http://localhost:3000/api/categories",
      data: data,
      headers: {
        "content-type": "application/json",
      },
      json: true,
    };
    axios(options)
      .then((response) => {
        console.log(response);
      })
      .then(this.resetInputs())
      .catch((err) => console.log(err));
      console.log(this.state);
  };

  resetInputs = () => {
    this.state.categories.push(this.state.description);
    this.setState({ description: '' });
    this.setState({ amount: 0 });
  }

  componentDidMount() {
    console.log("looking for data");
    this.fetchTransactions();
  };

  render() {
    return (
      <div>
        <h1>BudgetTracker</h1>
        <div className="app">
          <TransactionList categories={this.state.categories} transactions={this.state.transactions} />
          <div className="category">
            <h3>BudgetCategories</h3>
            <CategoryList categories={this.state.categories} />
            <form className="category-form" onSubmit={this.resetInputs}>
              <div className="category-input">
                <input
                  type="text"
                  placeholder="Budget Category"
                  name="description"
                  value={this.state.description}
                  onChange={this.onChange}
                />
                <input
                  type="number"
                  placeholder="Target Budget"
                  name="amount"
                  value={this.state.amount}
                  onChange={this.onChange}
                />
              </div>
              <button type="submit" onClick={this.addCategory}>
                +
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
