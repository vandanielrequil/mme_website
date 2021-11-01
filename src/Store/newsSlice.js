
import { createSlice } from '@reduxjs/toolkit';

const newsSlice = createSlice({
    name: 'news',
    initialState: {
        news: {
            newsArray: [],
            newsNumber: 0
        },
        value: 0
    },
    reducers: {
        incremented: state => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1
        },
        initialLoad: (state, action) => {
            state.news.newsArray = action.payload;
            state.news.newsNumber = action.payload.length;
        }
    }
})

export const { incremented, initialLoad } = newsSlice.actions;

export default newsSlice.reducer;