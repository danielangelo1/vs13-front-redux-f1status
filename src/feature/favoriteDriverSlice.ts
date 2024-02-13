import { createSlice } from "@reduxjs/toolkit";
import { Driver } from "../types/Driver";

interface FavoriteDriverState {
  favoriteDrivers: Driver[];
}

const initialState: FavoriteDriverState = {
  favoriteDrivers: [],
};

const favoriteDriverSlice = createSlice({
  name: "favoriteDriver",
  initialState,
  reducers: {
    addFavoriteDriver(state, action) {
      state.favoriteDrivers.push(action.payload);
    },
    removeFavoriteDriver(state, action) {
      state.favoriteDrivers = state.favoriteDrivers.filter(
        (driver) => driver.driver.id !== action.payload.driver.id,
      );
    },
  },
});

export const { addFavoriteDriver, removeFavoriteDriver } =
  favoriteDriverSlice.actions;

export default favoriteDriverSlice.reducer;
