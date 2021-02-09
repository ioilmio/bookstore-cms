import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeBook } from '../actions';
import Book from '../components/Book';

const BookList = ({ books, removeBook }) => (

  <table>
    <thead>
      <tr>
        <th>BookID</th>
        <th>Title</th>
        <th>Category</th>
        <th>Remove</th>
      </tr>
    </thead>
    <tbody>
      {
        books.map(book => (
          <Book key={book.id} book={book} removeBook={removeBook} />
        ))
      }
    </tbody>
  </table>
);

BookList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
  removeBook: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
});

const mapDispatchToProps = dispatch => ({
  removeBook: id => {
    dispatch(removeBook(id));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
