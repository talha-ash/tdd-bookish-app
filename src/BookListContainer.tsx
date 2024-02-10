import BookList from "./BookList";

import useBooks from "./useBooks";
function BookListContainer() {
  const { loading, error, books } = useBooks();

  return (
    <div data-test="book-list">
      <BookList books={books} />
    </div>
  );
}

export default BookListContainer;
