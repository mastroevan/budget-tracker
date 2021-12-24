import React from "react";

const CategoryList = ({categories}) => {
  return (
    <div className="category-list">
      {
        categories.map((category) => {
          return (
            <div className="category-type">{category}</div>
          )
        })
      }
    </div>
  );
}

export default CategoryList;
