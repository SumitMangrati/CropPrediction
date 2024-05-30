import { createSlice } from "@reduxjs/toolkit";

export const loginToggleSlice = createSlice({
    initialState: false,
    name: "loginToggle",
    reducers: {
        toggleLogin: (state) => !state
    }
})

export const { toggleLogin } = loginToggleSlice.actions;

export default loginToggleSlice.reducer;