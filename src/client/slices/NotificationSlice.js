import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    notifications: [],
};

const notificationSlice = createSlice({
    name: "notification",
    initialState,
    reducers: {
        addNotification: (state, action) => {
            state.notifications.push(action.payload);
        }, 
        dismissNotification: (state, action) => {
            state.notifications = state.notifications.filter((notification) => notification.id !== action.payload)
        },
    }
});

export const { addNotification, dismissNotification } = notificationSlice.actions;

export default notificationSlice.reducer;