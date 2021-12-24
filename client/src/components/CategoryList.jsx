import React from 'react';

const CategoryList = ({categories}) => {
  return(
    <div className="category-list">
      {
        categories.map((category) => {
          return(
            <div className='category-title'>{category}</div>
          )
        })
      }
    </div>
  );
}

export default CategoryList;