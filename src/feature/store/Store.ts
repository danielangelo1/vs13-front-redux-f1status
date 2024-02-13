import { configureStore } from "@reduxjs/toolkit";
import favoriteDriverReducer from "../favoriteDriverSlice";
export const store = configureStore({
  reducer: {
    favoriteDriver: favoriteDriverReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
