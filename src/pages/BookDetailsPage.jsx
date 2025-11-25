import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';


const BookDetailsPage = () => {
  // Dynamic route parameter 
  const { id } = useParams(); 
  const navigate = useNavigate();
  const books = useSelector(state => state.books.list);

  // Find the selected book from the Redux state
  const book = useMemo(() => 
    books.find(b => b.id === id)
  , [books, id]);

  // Handle book not found (e.g., deleted or invalid URL)
  if (!book) {
    return (
      <div className="max-w-4xl mx-auto p-8 text-center bg-white mt-10 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-red-500">Book Not Found</h2>
        <p className="text-gray-600 mt-2">The requested book could not be found.</p>
        <button
          onClick={() => navigate('/books/All')}
          className="mt-6 bg-gray-500 text-white py-2 px-6 rounded-lg hover:bg-gray-600 transition duration-300"
        >
          Back to Browse
        </button>
      </div>
    );
  }

  // Display detailed information
  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="bg-white p-10 rounded-2xl shadow-2xl border-t-4 border-rose-400">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Mock Cover Art / Placeholder */}
          <div className="w-full md:w-1/3 flex-shrink-0">
            <div className="aspect-[2/3] bg-rose-200 rounded-lg shadow-inner flex items-center justify-center p-4">
              <span className="text-rose-800 text-center font-bold text-lg">{book.title}</span>
            </div>
          </div>
          {/* Details */}
          <div className="w-full md:w-2/3">
            <h1 className="text-5xl font-extrabold text-gray-900 mb-2">{book.title}</h1>
            <p className="text-2xl font-semibold text-rose-600 border-b pb-3 mb-4">
              by {book.author}
            </p>

            <div className="flex items-center space-x-4 mb-6">
              <div className="text-xl flex items-center">
                <span className="text-yellow-500 text-3xl mr-2">★</span>
                <span className="font-bold text-gray-800">{book.rating.toFixed(1)}</span> {/* Show Rating */}
              </div>
              <span className="px-3 py-1 text-sm font-medium text-rose-700 bg-rose-100 rounded-full border border-rose-300">
                {book.category}
              </span>
            </div>

            <h3 className="text-xl font-bold text-gray-700 mb-2">Description:</h3>
            <p className="text-gray-600 leading-relaxed italic">{book.description}</p>
          </div>
        </div>
      </div>

      {/* Back to Browse Button */}
      <button
        onClick={() => navigate(-1)} // Navigates back one step in history
        className="mt-8 flex items-center space-x-2 bg-gray-200 text-gray-700 py-3 px-6 rounded-full font-semibold hover:bg-gray-300 transition duration-300 shadow-md"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        <span>Back to Browse</span>
      </button>
    </div>
  );
};

export default BookDetailsPage;