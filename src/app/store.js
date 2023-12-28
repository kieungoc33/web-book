import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import ClientLoadingSlice from "../client/slices/LoadingSlice";
import ClientLanguageSlice from "../client/slices/LanguageSlice";
import ClientSearchSlice from "../client/slices/SearchSlice";
import ClientNotificationSlice from "../client/slices/NotificationSlice";
import AdminLanguageSlice from "../admin/slices/LanguageSlice";
import AdminLoadingSlice from "../admin/slices/LoadingSlice";

export const store = configureStore({
    reducer: {
        clientLoading: ClientLoadingSlice,
        clientLanguage: ClientLanguageSlice,
        clientSearch: ClientSearchSlice,
        clientNotification: ClientNotificationSlice,
        adminLanguage: AdminLanguageSlice,
        adminLoading: AdminLoadingSlice,
    },
});

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
