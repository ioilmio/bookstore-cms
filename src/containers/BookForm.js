import React from 'react';

const categories = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];
const makeoption = categories.map(item => (
  <option key={item.index}>
    {item}
  </option>
));

const BookForm = () => (
  <div>
    <input value="title" />
    <select>
      {makeoption}
    </select>
    <button type="submit">Submit</button>
  </div>
);

export default BookForm;
