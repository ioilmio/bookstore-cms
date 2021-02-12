import React from 'react';
import PropTypes from 'prop-types';
import '../styles/css/book.css';

const Book = ({ book, removeBook }) => {
  const { id, title, category } = book;
  return (

    <div className="book-card">
      <div className="book-info">
        <h4 className="book-category">{category}</h4>
        <h2 className="book-title">{title}</h2>
        <div className="book-card-actions">
          <button type="button" className="book-action">Comments</button>
          <button type="button" className="book-action">Edit</button>
          <button className="book-action" type="button" onClick={() => removeBook(id)}>Remove book</button>
        </div>
      </div>
      <div className="book-percentage">
        <div className="book-circle"> 0</div>
        <div className="book-percentage-number"> 64%</div>
        Completed
      </div>
      <div className="book-status">
        Current chapter
        <div className="book-status chapter">17</div>
        <button type="button" className="update-status">Update</button>
      </div>
    </div>
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
