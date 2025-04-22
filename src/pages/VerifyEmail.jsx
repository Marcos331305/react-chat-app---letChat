import React from "react";
import { useEffect } from "react";

import { Link, useSearchParams } from "react-router-dom";

import { useVerifyUserMutation } from "@/redux/api/authApiSlice";

const VerifyEmail = () => {
  const [searchParams] = useSearchParams();
  const [verifyUser, { isLoading, isError, isSuccess }] =
    useVerifyUserMutation();

  useEffect(() => {
    const userId = searchParams.get("userId");
    const secret = searchParams.get("secret");

    if (userId && secret) {
      verifyUser({ userId, secret });
    }
  }, [searchParams, verifyUser]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {isLoading && <h2 className="text-2xl font-semibold">Verifying...</h2>}
      {isSuccess && (
        <h2 className="text-2xl font-semibold">
          Email Verified! Now you can logIn with your account.
          {/* <Link to="/auth/login" className="text-blue-600 hover:underline" /> */}
          Login
        </h2>
      )}
      {isError && (
        <h2 className="text-2xl font-semibold text-red-500">
          Verification failed. Link maybe already visited or expired.
        </h2>
      )}
    </div>
  );
};

export default VerifyEmail;
