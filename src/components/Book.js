import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, removeBook }) => {
  const { id, title, category } = book;
  return (
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
          <button type="button" onClick={() => removeBook(id)}>Remove book</button>
        </td>
      </tr>
    </>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;
