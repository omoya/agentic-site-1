import React, { useEffect, useState } from 'react';
import { fetchBooks } from './mockData';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function loadBooks() {
      const fetchedBooks = await fetchBooks();
      setBooks(fetchedBooks);
    }
    loadBooks();
  }, []);

  return (
    <div className="App">
      <h1>Book List</h1>
      <div className="book-list">
        {books.map((book, index) => (
          <div key={index} className="book-item">
            <img src={book.coverImage} alt={book.title} />
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <p>{book.genre}</p>
            <p>{book.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
