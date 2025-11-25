import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import HomePage from './pages/HomePage';
import BrowseBooksPage from './pages/BrowseBooksPage';
import BookDetailsPage from './pages/BookDetailsPage';
import AddBookPage from './pages/AddBookPage';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className='min-h-screen'>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/books/:category" element={<BrowseBooksPage />} />
        <Route path="/books" element={<BrowseBooksPage />} />
        <Route path="/books/details/:id" element={<BookDetailsPage />} />
        <Route path="/add" element={<AddBookPage />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
      
    </div>
  )
}

export default App
