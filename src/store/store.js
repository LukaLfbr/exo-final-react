// src/store/store.js
import { configureStore } from "@reduxjs/toolkit";
import yamsReducer from "./yamsSlice";

export const store = configureStore({
  reducer: {
    yams: yamsReducer,
  },
});
