import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./feature/apiSlice";
import modalReducer from "./feature/modalSlice";
import ramdomUserReducer from "./feature/randomUserSlice";

const store = configureStore({
  reducer: {
    data: dataReducer,
    modal: modalReducer,
    ramdomUser: ramdomUserReducer,
    // other reducers...
  },
});

export default store;
