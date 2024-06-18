// modalSlice.js
import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modals",
  initialState: {
    modalA: {
      isOpen: false,
    },
    modalB: {
      isOpen: false,
    },
  },
  reducers: {
    openModalA: (state) => {
      state.modalA.isOpen = true;
    },
    closeModalA: (state, action) => {
      state.modalA.isOpen = false;
    },
    openModalB: (state, action) => {
      state.modalB.isOpen = true;
    },
    closeModalB: (state, action) => {
      state.modalB.isOpen = false;
    },
  },
});

export const { openModalA, closeModalA, openModalB, closeModalB } =
  modalSlice.actions;
export default modalSlice.reducer;
