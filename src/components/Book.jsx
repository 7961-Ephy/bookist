import React from "react";

function Book({ key, title, author, publisher, description, image }) {
  return (
    <div>
      {/* Book */}
      <div className="flex justify-between items-center gap-4 bg-white rounded-lg shadow-md">
        <div className="w-24 h-44 rounded flex items-center justify-center bg-gray-200">
          <img src={image} alt="" />
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
          <p className="text-gray-600 font-medium">By {author}</p>
          <p className="text-gray-500 text-sm mb-2">Published by {publisher}</p>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Book;
