import React, { useEffect, useState } from "react";
import { getCategories } from "./util";

const CategoryForm = () => {
  const [categories, setCategories] = useState([]);
  const [type, setType] = useState("");
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    getCategories((data) => {
      setCategories(data);
    });
  }, []);

  const onChange = (evt) => {
    if (evt.target.name === "type") {
      setType(evt.target.value);
    } else if (evt.target.name === "amount") {
      setAmount(evt.target.value);
    }
  };

  const addCategory = (e) => {
    e.preventDefault();
    const data = {
      description: type,
      amount: amount,
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
      .catch((err) => console.log(err));
    console.log(state);
  };

  return (
    <div className="category-form">
      <form>
        <div className="category-input">
          <input
            type="text"
            placeholder="Budget Category"
            name="type"
            value={type}
            onChange={onChange}
          />
          <input
            type="number"
            placeholder="Target Budget"
            name="amount"
            value={amount}
            onChange={onChange}
          />
        </div>
        <button type="submit" onClick={addCategory}>
          +
        </button>
      </form>
    </div>
  );
};

export default CategoryForm;
