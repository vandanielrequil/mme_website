
import { createSlice } from '@reduxjs/toolkit';

const newsSlice = createSlice({
    name: 'news',
    initialState: {
        news: {
            array: [],
            amount: 0
        },
        newsPage: {
            curPgNum: 1,
        }
    },
    reducers: {
        initialLoad: (state, action) => {
            state.news.array = action.payload;
            state.news.amount = action.payload.length;
        },
        currentPage: (state, action) => {
            state.newsPage.curPgNum = action.payload;
        }
    }
})

export const { incremented, initialLoad, currentPage } = newsSlice.actions;

export default newsSlice.reducer;