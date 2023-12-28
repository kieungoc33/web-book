import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    language: 'en'
}

export const LanguageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        changeLanguage: (state) => {
            if (state.language === 'en') {
                state.language = 'vi';
            } else {
                state.language = 'en';
            }
        }
    }
})

export const { changeLanguage } = LanguageSlice.actions;

export default LanguageSlice.reducer;