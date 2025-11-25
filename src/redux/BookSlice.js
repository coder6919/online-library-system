import { createSlice } from '@reduxjs/toolkit';
import { initialBooks } from '../dummyBooks';

const booksSlice = createSlice({
    name: "books",
    initialState:{
        list: initialBooks
    },
    reducers:{
        addBook: (state,action) => {
            const newBook = {
                ...action.payload,
                id: Date.now.toString(),
                rating: parseFloat(action.payload.rating),
                isPopular: false 
            }
            state.list.unshift(newBook);
        }
    }
})

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;