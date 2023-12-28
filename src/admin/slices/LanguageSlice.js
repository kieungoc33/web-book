import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    language: "en"
}

const languageSlice = createSlice({
    name: "language",
    initialState,
    reducers: {
        changeLanguage: (state) => {
            if (state.language === "en") {
                state.language = "vi";
            } else {
                state.language = "en";
            }
        }
    }
});

export const { setLanguage } = languageSlice.actions;

export default languageSlice.reducer;