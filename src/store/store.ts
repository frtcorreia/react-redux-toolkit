import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./Counter/stockSlice";
import userReducer from "./User/userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
