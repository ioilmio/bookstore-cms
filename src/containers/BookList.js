import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../components/Book';

const BookList = () => {
  const books = useSelector(state => state.books);
  return (

    <table>
      <thead>
        <tr>
          <th>BookID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {
          books.map(book => (
            <Book key={book.id} book={book} />
          ))
        }
      </tbody>
    </table>
  );
};

export default BookList;
