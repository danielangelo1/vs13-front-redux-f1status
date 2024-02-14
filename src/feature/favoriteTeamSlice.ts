import { createSlice } from "@reduxjs/toolkit";
import { Team } from "../types/Team";

interface FavoriteTeamState {
  favoriteTeams: Team[];
}

const initialState: FavoriteTeamState = {
  favoriteTeams: [],
};

const favoriteTeamSlice = createSlice({
  name: "favoriteTeam",
  initialState,
  reducers: {
    addFavoriteTeam(state, action) {
      state.favoriteTeams.push(action.payload);
    },
    removeFavoriteTeam(state, action) {
      state.favoriteTeams = state.favoriteTeams.filter(
        (team) => team.team.id !== action.payload.team.id,
      );
    },
  },
});

export const { addFavoriteTeam, removeFavoriteTeam } =
  favoriteTeamSlice.actions;

export default favoriteTeamSlice.reducer;
