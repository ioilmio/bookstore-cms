import React from 'react';
import PropTypes from 'prop-types';
import '../styles/css/booklist.css';

import { connect } from 'react-redux';
import { removeBook } from '../actions';
import Book from '../components/Book';

const BookList = ({
  books, removeBook, filter,
}) => {
  const filteredBooks = (filter !== 'All') ? books.filter(book => book.category === filter) : books;
  return (

    <main className="booklist">
      {
        filteredBooks.map(book => (
          <Book key={book.id} book={book} removeBook={removeBook} />
        ))
      }
    </main>
  );
};

BookList.defaultProps = {
  filter: 'All',
};

BookList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
  removeBook: PropTypes.func.isRequired,
  filter: PropTypes.string,
};

const mapStateToProps = state => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  removeBook: id => {
    dispatch(removeBook(id));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
