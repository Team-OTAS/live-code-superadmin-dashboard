import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./feature/apiSlice";
import modalReducer from "./feature/modalSlice";
import ramdomUserReducer from "./feature/randomUserSlice";
import alertReducer from "./feature/alertSlice";

const store = configureStore({
  reducer: {
    data: dataReducer,
    modal: modalReducer,
    ramdomUser: ramdomUserReducer,
    alert: alertReducer,
    // other reducers...
  },
});

export default store;
