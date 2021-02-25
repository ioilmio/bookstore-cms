/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchBooks from '../actions/fetchBooks';
import '../styles/css/booklist.css';
import { removeBook } from '../actions';
import Book from '../components/Book';

function BookList({
  books, removeBook, filter, fetchBooks,
}) {
  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  const filteredBooks = (filter !== 'All') ? books.filter(book => book.category === filter) : books;
  // console.log('books', books);
  // console.log('filteredBooks', filteredBooks[0]);
  return books.loading ? (
    <h2>
      Loading...
    </h2>
  ) : books.error ? (
    <h2>{books.error}</h2>
  ) : (
    <main className="booklist">
      {
            books && filteredBooks.map(book => (
              <Book key={book.id} book={books} removeBook={removeBook} />
            ))
          }
    </main>
  );
}

BookList.defaultProps = {
  filter: 'All',
};

BookList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
  removeBook: PropTypes.func.isRequired,
  filter: PropTypes.string,
  fetchBooks: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  removeBook: id => {
    dispatch(removeBook(id));
  },
  fetchBooks: () => dispatch(fetchBooks()),
});
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
