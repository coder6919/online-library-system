import React from 'react'
import { Link } from 'react-router-dom';

function BookCard({ book }) {
  return (
    <div className="bg-white p-6 border border-rose-100 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-bold text-gray-800 line-clamp-2 min-h-[56px]">{book.title}</h3>
        <p className="text-sm text-rose-500 font-semibold mt-1">{book.author}</p>
        <div className="mt-2 flex items-center text-sm">
          <span className="text-yellow-500 mr-1">★</span>
          <span className="text-gray-600">{book.rating.toFixed(1)}</span>
          <span className="ml-3 px-2 py-0.5 text-xs font-medium text-rose-700 bg-rose-100 rounded-full">
            {book.category}
          </span>
        </div>
      </div>
      <div className="mt-4">
        <Link
          to={`/books/details/${book.id}`}
          className="block text-center w-full bg-rose-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-rose-600 transition duration-300 shadow-md hover:shadow-lg"
        >
          View Details
        </Link>
      </div>
    </div>
  )
}

export default BookCard
