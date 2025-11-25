import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import BookCard from '../components/BookCard'
import { CATEGORIES } from '../dummyBooks';

function HomePage() {
    // Select the full list of books from Redux state
    const books = useSelector(state => state.books.list);

      const popularBooks = useMemo(() => 
    books.filter(b => b.isPopular).slice(0, 4)
  , [books]);
    return (
        <div className="max-w-7xl mx-auto p-8 pt-12">
            <div className="text-center mb-12 p-10 bg-rose-50 rounded-2xl shadow-inner border border-rose-100">
                <h2 className="text-5xl font-extrabold text-gray-800 mb-3">
                    Welcome to <span className="text-rose-500">LibraryHub</span>
                </h2>
                <p className="text-xl text-gray-600">
                    Your online source for a world of books. Explore new titles, discover authors, and expand your library.
                </p>
            </div>

            {/* Book Categories */}
            <section className="mb-12">
                <h3 className="text-3xl font-bold text-gray-700 mb-6 border-b-2 border-rose-200 pb-2">
                    Browse by Category
                </h3>
                <div className="flex flex-wrap gap-4">
                    {CATEGORIES.filter(c => c !== 'All').map(category => (
                        <Link
                            key={category}
                            to={`/books/${category}`}
                            className="px-6 py-3 bg-white text-rose-600 border border-rose-400 font-semibold rounded-full shadow-md hover:bg-rose-100 transition duration-300 transform hover:scale-105"
                        >
                            {category}
                        </Link>
                    ))}
                </div>
            </section>

            {/* Popular Books Display */}
            <section>
                <h3 className="text-3xl font-bold text-gray-700 mb-6 border-b-2 border-rose-200 pb-2">
                    Popular Books
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {popularBooks.map(book => (
                        <BookCard key={book.id} book={book} />
                    ))}
                </div>
            </section>
        </div>
    )
}

export default HomePage