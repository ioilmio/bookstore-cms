export const CREATE_BOOK = ({ book }, state) => [
  ...state,
  book,
];

export const REMOVE_BOOK = ({ book }, state) => state.filter(
  ({ bookId }) => bookId !== book.bookId,
);
