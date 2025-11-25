import { Link } from 'react-router-dom';

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Browse Books', path: '/books/All' },
    { name: 'Add Book', path: '/add' },
];


function Header() {
    return (
        <div>
            <header className="sticky top-0 z-10 bg-white border-b border-rose-100 shadow-md">
                <nav className="max-w-7xl mx-auto p-4 flex justify-between items-center">
                    <Link to="/" className="text-2xl font-extrabold text-rose-600 transition duration-300 hover:text-rose-800">
                        LibraryHub
                    </Link>
                    <div className="flex space-x-6 font-medium">
                        {navLinks.map(link => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="text-gray-700 hover:text-rose-500 transition duration-300 px-3 py-1 rounded-lg">
                            
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </nav>
            </header>

        </div>
    )
}

export default Header