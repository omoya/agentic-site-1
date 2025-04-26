import React from "react";
import { useParams, Link } from "react-router-dom";

function BookDetails({ books }) {
  const { id } = useParams();
  const book = books[id];

  if (!book) {
    return (
      <div className="container mx-auto py-8 px-4">
        <h2 className="text-2xl font-bold mb-4">Book not found</h2>
        <Link to="/" className="text-blue-500 hover:underline">
          Go back to the book list
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src={book.coverImage}
          alt={book.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">{book.title}</h2>
          <p className="text-sm text-gray-600 mb-2">Author: {book.author}</p>
          <p className="text-sm text-gray-600 mb-2">Genre: {book.genre}</p>
          <p className="text-sm text-gray-700 mb-4">{book.description}</p>
          <Link to="/" className="text-blue-500 hover:underline">
            Back to Book List
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
