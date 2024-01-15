// modalSlice.js
import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modals",
  initialState: {
    modalA: {
      isOpen: false,
    },
    modalB: {
      isOpen: true,
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
      state.modalB.isOpen = false;
    },
    closeModalB: (state, action) => {
      state.modalB.isOpen = true;
    },
  },
});

export const { openModalA, closeModalA, openModalB, closeModalB } =
  modalSlice.actions;
export default modalSlice.reducer;
