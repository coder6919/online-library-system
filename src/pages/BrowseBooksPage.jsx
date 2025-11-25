import { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import BookCard from '../components/BookCard';
import { CATEGORIES } from '../dummyBooks';

/**
 * Browse Books Page
 * Handles category filtering and search functionality.
 */
const BrowseBooksPage = () => {
  // Get category from dynamic route (Requirement 2: 5 marks)
  const { category } = useParams();
  const selectedCategory = category || 'All';
  const books = useSelector(state => state.books.list);
  const [searchTerm, setSearchTerm] = useState('');

  // 1. Filter books based on the URL category
  const filteredByCategory = useMemo(() => {
    if (selectedCategory === 'All') {
      return books;
    }
    return books.filter(book => book.category === selectedCategory);
  }, [books, selectedCategory]);

  // 2. Filter books based on the search term
  const finalFilteredBooks = useMemo(() => {
    if (!searchTerm) return filteredByCategory;

    const lowerCaseSearch = searchTerm.toLowerCase();
    return filteredByCategory.filter(
      book =>
        book.title.toLowerCase().includes(lowerCaseSearch) ||
        book.author.toLowerCase().includes(lowerCaseSearch)
    );
  }, [filteredByCategory, searchTerm]);


  return (
    <div className="max-w-7xl mx-auto p-8">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-8">
        Browse <span className="text-rose-500">{selectedCategory}</span> Books
      </h2>

      {/* Search Bar */}
      <div className="mb-8 p-4 bg-white rounded-xl shadow-md border border-rose-100">
        <input
          type="text"
          placeholder="Search by Title or Author..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 border-2 border-rose-200 rounded-lg focus:outline-none focus:border-rose-500 transition duration-200 text-gray-700"
        />
      </div>

      {/* Category Tabs (Dynamic Routing visualization) */}
      <div className="flex flex-wrap gap-3 mb-10">
        {CATEGORIES.map(cat => (
          <Link
            key={cat}
            to={`/books/${cat}`}
            className={`px-5 py-2 rounded-full font-semibold transition duration-200 ${
              cat === selectedCategory
                ? 'bg-rose-500 text-white shadow-lg'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-rose-50'
            }`}
          >
            {cat}
          </Link>
        ))}
      </div>

      {/* Book List Display */}
      {finalFilteredBooks.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {finalFilteredBooks.map(book => (
            // Each book has a "View Details" link
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      ) : (
        <div className="text-center p-10 bg-rose-50 rounded-xl text-xl text-gray-600 border border-rose-200">
          No books found in the "{selectedCategory}" category matching "{searchTerm}".
        </div>
      )}
    </div>
  );
};

export default BrowseBooksPage;