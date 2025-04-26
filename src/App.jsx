import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { fetchBooks } from "./mockData";
import BookDetails from "./BookDetails";

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
    <Router>
      <div className="min-h-screen bg-gray-100 text-gray-800">
        <header className="bg-blue-600 text-white py-4 shadow-md">
          <h1 className="text-center text-3xl font-bold">Book Explorer</h1>
        </header>
        <Routes>
          <Route
            path="/"
            element={
              <main className="container mx-auto py-8 px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {books.map((book, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg shadow-md overflow-hidden"
                    >
                      <img
                        src={book.coverImage}
                        alt={book.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h2 className="text-xl font-semibold mb-2">
                          {book.title}
                        </h2>
                        <p className="text-sm text-gray-600 mb-1">
                          {book.author}
                        </p>
                        <p className="text-sm text-gray-600 mb-1">
                          {book.genre}
                        </p>
                        <p className="text-sm text-gray-700 mb-2 truncate">
                          {book.description.length > 100
                            ? `${book.description.substring(0, 100)}...`
                            : book.description}
                        </p>
                        <Link
                          to={`/book/${index}`}
                          className="text-blue-500 hover:underline text-sm"
                        >
                          View More
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </main>
            }
          />
          <Route path="/book/:id" element={<BookDetails books={books} />} />
        </Routes>
        <footer className="bg-gray-800 text-white py-4 mt-8">
          <p className="text-center text-sm">
            &copy; 2025 Book Explorer. All rights reserved.
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
