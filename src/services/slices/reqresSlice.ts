import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from "../../types/User";

import { Login } from "../../types/Login";

interface ReqresState {
  users: User[];
  loading: boolean;
  error: string;
}

const initialState: ReqresState = {
  users: [],
  loading: false,
  error: "",
};

export const postUser = createAsyncThunk("reqres/post", async (user: User) => {
  const response = await fetch("https://reqres.in/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  return response.json();
});

export const postLogin = createAsyncThunk(
  "reqres/register",
  async (login: Login) => {
    try {
      const response = await fetch("https://reqres.in/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(login),
      });
      return response.json();
    } catch (e) {
      console.log(e);
    }
  },
);

const reqresSlice = createSlice({
  name: "reqres",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(postUser.fulfilled, (state, action) => {
      state.loading = false;
      state.users.push(action.payload);
      alert("Usuário criado com sucesso");
    });
    builder.addCase(postUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? "Um erro ocorreu";
    });
    builder.addCase(postLogin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(postLogin.fulfilled, (state, action) => {
      state.loading = false;
      console.log(action.payload, postLogin);
      alert("Registro efetuado com sucesso");
    });
    builder.addCase(postLogin.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? "Um erro ocorreu";
    });
  },
});

export const { setLoading, setError } = reqresSlice.actions;

export default reqresSlice.reducer;
