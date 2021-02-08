import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../components/Book';

const BookList = () => {
  const books = useSelector(state => state.books);
  const handleRemove = () => {
  };
  return (

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
            <Book key={book.id} book={book} onClick={() => handleRemove} />
          ))
        }
      </tbody>
    </table>
  );
};

export default BookList;
