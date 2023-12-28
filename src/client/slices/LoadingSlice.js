import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loadingState: false,
}

export const LoadingSlice = createSlice({
    name: 'loading',
    initialState,
    reducers: {
        startLoading: (state) => {
            state.loadingState = true;
        }, 
        stopLoading: (state) => {
            state.loadingState = false;
        }
    }
})

export const { startLoading, stopLoading } = LoadingSlice.actions;

export default LoadingSlice.reducer;