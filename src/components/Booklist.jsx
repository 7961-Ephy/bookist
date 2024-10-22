import React from "react";
import Book from "./Book";

function Booklist({ books }) {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Booklist Section */}
      <div className="grid gap-4">
        {books.map((book, index) => (
          <Book
            key={index}
            title={book.title}
            author={book.author}
            publisher={book.publisher}
            description={book.description}
            image={book.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Booklist;
