import { Book } from "./types";

const BookList = ({ books }: { books: Book[] }) => {
  return books.map((book, index) => {
    return (
      <div key={index} className="book-item">
        <h2 className="title">{book.name}</h2>
      </div>
    );
  });
};

export default BookList;
