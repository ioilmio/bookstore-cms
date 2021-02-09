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
      <select ref={selectCat} name="category" placeholder="Category" onChange={() => changeFilter(selectCat.current.value)}>
        {allCategories.map(category => (
          <option key={category}>{category}</option>
        ))}
      </select>
    </div>
  );
};

CategoryFilter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};

export default CategoryFilter;
