import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CREATE_BOOK } from '../actions/actionsTypes';

const categories = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

const makeoption = categories.map((category, index) => (
  <option key={index.toString()} value={category}>
    {category}
  </option>
));

const BookForm = () => {
  const [bookTitle, setTitle] = useState('');
  const [bookCategories, setCategory] = useState(categories[0]);

  const dispatch = useDispatch();

  const handleTitleChange = e => {
    setTitle(e.target.value);
  };
  const handleChange = e => {
    setCategory(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: CREATE_BOOK, title: bookTitle, category: bookCategories });
    setTitle('');
  };
  return (

    <form onSubmit={handleSubmit}>
      <input placeholder="Enter title" onChange={handleTitleChange} value={bookTitle} />
      <select onChange={handleChange}>
        {makeoption}
      </select>
      <button type="submit" value="submit">Add book</button>
    </form>
  );
};

export default BookForm;
