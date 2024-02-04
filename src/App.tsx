import Typography from "@mui/material/Typography";
import BookList from "./BookList";
import { useEffect, useState } from "react";
import axios from "axios";
import { Book } from "./types";
function App() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    axios.get("http://localhost:8080/books").then((res) => {
      setBooks(res.data);
    });
  }, []);

  return (
    <>
      <Typography variant="h2" component="h2" data-test="heading">
        Bookish
      </Typography>
      <div data-test="book-list">
        <BookList books={books} />
      </div>
    </>
  );
}

export default App;
