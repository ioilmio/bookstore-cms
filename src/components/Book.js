import React from 'react';
import PropTypes from 'prop-types';
import '../styles/css/book.css';
import ProgressBar from './ProgressRing';

const Book = ({ book, removeBook }) => {
  const { id, title, category } = book;

  const deleteBook = async id => {
    await fetch(`http://localhost:3000/api/v1/books/${id}`, {
      method: 'DELETE',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
    });
  };
  return (

    <div className="book-card">
      <div className="book-info">
        <h4 className="book-category">{category}</h4>
        <h2 className="book-title">{title}</h2>
        <h4 className="book-author">Author</h4>
        <div className="book-card-actions">
          <button type="button" className="book-action">Comments</button>
          {' '}
          <div className="line-2" />

          <button type="button" className="book-action">Edit</button>
          {' '}
          <div className="line-2" />

          <button
            className="book-action"
            type="button"
            onClick={() => {
              removeBook(id);
              deleteBook(id);
            }}
          >
            Remove
          </button>
        </div>
      </div>
      <div className="book-percentage">
        <div className="book-circle" />
        <ProgressBar
          progress={64}
          size={70}
          strokeWidth={5}
          circleOneStroke="#0099ff"
          circleTwoStroke="#379cf6"
        />
        <div className="book-percentage-number">
          {' '}
          <h4>64%</h4>
          <h4 className="book-percentage-completed">Completed</h4>
        </div>
      </div>
      <div className="line" />
      <div className="book-status">
        <h4>Current chapter</h4>
        <div className="book-status-chapter">Chapter 17</div>
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
