import { configureStore } from '@reduxjs/toolkit';
import newsSlice from './newsSlice';
import doorsSlice from './doorsSlice';

const store = configureStore({
    reducer: {
        newsReducer: newsSlice,
        doorsReducer: doorsSlice
    }
});

export default store;

