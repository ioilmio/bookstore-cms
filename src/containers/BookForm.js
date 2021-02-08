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
const makeoption = categories.map((item, index) => (
  <option key={index.toString()}>
    {item}
  </option>
));

const BookForm = () => (
  <div>
    <input placeholder="Enter title" />
    <select>
      {makeoption}
    </select>
    <button type="submit">Submit</button>
  </div>
);

export default BookForm;
