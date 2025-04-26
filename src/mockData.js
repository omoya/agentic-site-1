export async function fetchBooks() {
  const response = await fetch(
    "https://openlibrary.org/subjects/science_fiction.json?limit=6"
  );
  const data = await response.json();

  return data.works.map((book) => ({
    title: book.title,
    author: book.authors?.[0]?.name || "Unknown Author",
    genre: "Science Fiction",
    description: book.subject || "No description available.",
    coverImage: book.cover_id
      ? `https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg`
      : "https://via.placeholder.com/150",
  }));
}
