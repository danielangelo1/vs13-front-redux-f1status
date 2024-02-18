import {
  FetchBaseQueryError,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import type { User } from "../types/User";
import { Login } from "../types/Login";
import { SerializedError } from "@reduxjs/toolkit";

export interface AuthResponse {
  data?: Login;
  token?: string;
  error?: FetchBaseQueryError | SerializedError;
}

export const reqresApi = createApi({
  reducerPath: "reqresApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://reqres.in/api",
  }),
  tagTypes: ["User", "Login"],
  endpoints: (builder) => ({
    getUsers: builder.query<User[], number | void>({
      query: (page = 1) => `users?page=${page}`,
      providesTags: ["User"],
    }),
    getUserById: builder.query<User, number>({
      query: (id) => `users/${id}`,
      providesTags: ["User"],
    }),
    register: builder.mutation<Login, Partial<Login>>({
      query: (body) => ({
        url: `register`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Login"],
    }),
    login: builder.mutation<AuthResponse, Partial<Login>>({
      query: (body) => ({
        url: `login`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Login"],
    }),
  }),
});

export const {
  useGetUserByIdQuery,
  useGetUsersQuery,
  useLoginMutation,
  useRegisterMutation,
} = reqresApi;
