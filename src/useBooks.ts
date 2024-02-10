import axios from "axios";
import { useEffect, useState } from "react";
import { Book } from "./types";

const useBooks = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchBooks = async () => {
    setError(false);
    setLoading(true);
    try {
      const {
        data: { books },
      } = await axios.get("/api/books");
      console.log(books);
      setBooks(books);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchBooks();
  }, []);

  return { books, error, loading };
};

export default useBooks;
