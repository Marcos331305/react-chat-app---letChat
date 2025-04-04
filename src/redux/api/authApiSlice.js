import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ID } from "appwrite";

import { account } from "@/services/appWrite";
import { clearUser, setUser } from "../slices/authSlice";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery(), // No actual base URL since we use Appwrite SDK
  endpoints: (builder) => ({
    register: builder.mutation({
      async queryFn({ email, password, username }, { dispatch }) {
        try {
          const user = await account.create(
            ID.unique(),
            email,
            password,
            username,
          );
          console.log(user);
          return { data: user };
        } catch (error) {
          return { error: error.message };
        }
      },
    }),

    login: builder.mutation({
      async queryFn({ email, password }, { dispatch }) {
        try {
          const session = await account.createEmailPasswordSession(
            email,
            password,
          );
          const user = await account.get();
          console.log(user);
          dispatch(setUser(user)); // Store user in Redux state
          return { data: session };
        } catch (error) {
          return { error: error.message };
        }
      },
    }),

    logout: builder.mutation({
      async queryFn(_, { dispatch }) {
        try {
          await account.deleteSession("current");
          dispatch(clearUser()); // Clear user from Redux state
          return { data: "Logged out successfully" };
        } catch (error) {
          return { error: error.message };
        }
      },
    }),

    getCurrentUser: builder.query({
      async queryFn(_, { dispatch }) {
        try {
          const user = await account.get();
          dispatch(setUser(user)); // Store user in Redux state
          return { data: user };
        } catch (error) {
          return { error: error.message };
        }
      },
    }),

    sendVerificationEmail: builder.mutation({
      async queryFn() {
        try {
          await account.createVerification(
            "http://localhost:5173/verify-email",
          ); // Send verification email
          return { data: "Verification email sent!" };
        } catch (error) {
          return { error: error.message };
        }
      },
    }),

    verifyUser: builder.mutation({
      async queryFn({ userId, secret }) {
        try {
          await account.updateVerification(userId, secret); // Confirm email verification
          return { data: "Email verified successfully!" };
        } catch (error) {
          return { error: error.message };
        }
      },
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useLogoutMutation,
  useGetCurrentUserQuery,
  useSendVerificationEmailMutation,
  useVerifyUserMutation,
} = authApi;
