import { configureStore } from "@reduxjs/toolkit";
import  loginToggleSlice  from "./slices/LoginToggle";
export const store = configureStore({
    reducer: {
        loginToggle: loginToggleSlice,
    }
})