import React from 'react';
import BookList from '../containers/BookList';
import BookForm from '../containers/BookForm';
import Nav from '../containers/Nav';

const App = () => (
  <div>
    <Nav />
    <BookList />
    <BookForm />
  </div>
);

export default App;
