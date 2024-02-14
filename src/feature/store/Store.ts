import { configureStore } from "@reduxjs/toolkit";
import favoriteDriverReducer from "../favoriteDriverSlice";
import seasonReducer from "../seasonSlice";
import favoriteTeamReducer from "../favoriteTeamSlice";

export const store = configureStore({
  reducer: {
    favoriteDriver: favoriteDriverReducer,
    season: seasonReducer,
    favoriteTeam: favoriteTeamReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
