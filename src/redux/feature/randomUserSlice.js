import { createSlice } from "@reduxjs/toolkit";

const randomuserSlice = createSlice({
  name: "ramdomUser",
  initialState: {
    data: [],
  },
  reducers: {
    resdata: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { resdata } = randomuserSlice.actions;
export default randomuserSlice.reducer;
