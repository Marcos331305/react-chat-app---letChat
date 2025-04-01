import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    signUp: builder.mutation({
      async queryFn({ email, password, username }) {
        try {
          // Create user account in Appwrite
          const user = await account.create(
            "unique()",
            email,
            password,
            username,
          );
          return { data: user };
        } catch (error) {
          return { error: error.message };
        }
      },
    }),
  }),
});

export const { useSignUpMutation } = authApi;
