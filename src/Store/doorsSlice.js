
import { createSlice } from '@reduxjs/toolkit';

const doorsSlice = createSlice({
    name: 'doors',
    initialState: {
        doors: {
            array: [],
            amount: 0
        },
        doorsPage: {
            curPgNum: 1,
        }
    },
    reducers: {
        initialLoad: (state, action) => {
            state.doors.array = action.payload;
            state.doors.amount = action.payload.length;
        },
        currentPage: (state, action) => {
            state.doorsPage.curPgNum = action.payload;
        }
    }
})

export const { incremented, initialLoad, currentPage } = doorsSlice.actions;

export default doorsSlice.reducer;