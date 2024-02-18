import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import favoriteDriverReducer from "../favoriteDriverSlice";
import seasonReducer from "../seasonSlice";
import favoriteTeamReducer from "../favoriteTeamSlice";
import { reqresApi } from "../../services/reqresApi";

export const store = configureStore({
  reducer: {
    favoriteDriver: favoriteDriverReducer,
    season: seasonReducer,
    favoriteTeam: favoriteTeamReducer,
    [reqresApi.reducerPath]: reqresApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(reqresApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
