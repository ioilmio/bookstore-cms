import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book: { id, title, category } }) => (
  <>
    <tr>
      <td>
        {id.substring(0, 5)}
      </td>
      <td>
        {title}
      </td>
      <td>
        {category}
      </td>
      <td>
        <button type="button">Remove book</button>
      </td>
    </tr>
  </>
);

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
