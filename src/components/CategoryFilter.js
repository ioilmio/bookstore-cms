import React from 'react';
import PropTypes from 'prop-types';

const categories = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

const CategoryFilter = ({
  changeFilter,
}) => {
  const allCategories = ['All', ...categories];
  const selectCat = React.useRef(null);
  return (
    <div>
      <label htmlFor="category" className="nav-categories">
        Category
        <select className="nav-filter" ref={selectCat} name="category" placeholder="Category" onChange={() => changeFilter(selectCat.current.value)}>
          {allCategories.map(category => (
            <option className="option" key={category}>{category}</option>
          ))}
        </select>
      </label>
    </div>
  );
};

CategoryFilter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};

export default CategoryFilter;
