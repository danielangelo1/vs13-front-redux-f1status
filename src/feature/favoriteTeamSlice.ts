import { createSlice } from "@reduxjs/toolkit";
import { Team } from "../types/Team";
import { toast } from "react-toastify";

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
      if (
        state.favoriteTeams.some(
          (team) => team.team.id === action.payload.team.id,
        )
      ) {
        toast.error(
          `Equipe ${action.payload.team.name} já está nos favoritos`,
          {
            autoClose: 300,
          },
        );
        return;
      }
      state.favoriteTeams.push(action.payload);
      toast.success(
        `Equipe ${action.payload.team.name} adicionado aos favoritos`,
        {
          autoClose: 300,
        },
      );
    },
    removeFavoriteTeam(state, action) {
      state.favoriteTeams = state.favoriteTeams.filter(
        (team) => team.team.id !== action.payload.team.id,
      );
      toast.success(
        `Equipe ${action.payload.team.name} removida dos favoritos`,
        {
          autoClose: 300,
        },
      );
    },
    clearFavoriteTeams(state) {
      state.favoriteTeams = [];
    },
  },
});

export const { addFavoriteTeam, removeFavoriteTeam, clearFavoriteTeams } =
  favoriteTeamSlice.actions;

export default favoriteTeamSlice.reducer;
