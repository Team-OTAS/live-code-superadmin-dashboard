import { createSlice } from "@reduxjs/toolkit";

const alertSlice = createSlice({
  name: "alert",
  initialState: {
    isOpen: false,
    message: {},
  },
  reducers: {
    openAlert: (state, action) => {
      state.isOpen = true;
      state.message = action.payload;
    },

    closeAlert: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openAlert, closeAlert } = alertSlice.actions;
export default alertSlice.reducer;
