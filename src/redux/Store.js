import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './BookSlice';

// Configure the global Redux store
const store = configureStore({
  reducer: {
    books: booksReducer, // Our books state is managed here
  },
});

export default store;