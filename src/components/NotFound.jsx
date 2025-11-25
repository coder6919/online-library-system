import React from 'react'
import { Link, useLocation } from 'react-router-dom';

function NotFound() {
  const location = useLocation();
  const invalidPath = location.pathname;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4 text-center">
      <div className="bg-white p-10 rounded-xl shadow-2xl max-w-lg w-full">
        <h1 className="text-9xl font-extrabold text-rose-500">404</h1>
        <h2 className="text-3xl font-bold text-gray-800 mt-4 mb-2">Page Not Found</h2>
        <p className="text-gray-600 mb-6">
          The route you tried to access does not exist:
          <code className="block bg-gray-100 p-2 mt-2 rounded-lg font-mono text-sm text-red-600">
            {invalidPath}
          </code>
        </p>
        <Link
          to="/"
          className="inline-block bg-rose-500 text-white py-3 px-8 rounded-full font-bold text-lg hover:bg-rose-600 transition duration-300 shadow-lg transform hover:scale-105"
        >
          Go Back to Home
        </Link>
      </div>
    </div>
  )
}

export default NotFound
