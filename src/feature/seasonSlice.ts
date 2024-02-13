import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface SeasonState {
  season: number;
}

const initialState: SeasonState = {
  season: 2023,
};

const seasonSlice = createSlice({
  name: "season",
  initialState,
  reducers: {
    changeSeason: (state, action: PayloadAction<number>) => {
      state.season = action.payload;
    },
  },
});

export const { changeSeason } = seasonSlice.actions;
export default seasonSlice.reducer;
