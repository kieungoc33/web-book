import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchState: false,
    searchQuery: "",
};

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setSearchState: (state) => {
            state.searchState = !state.searchState;
        },
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
        },
    },
});

export const { setSearchState, setSearchQuery } = searchSlice.actions;

export default searchSlice.reducer;
