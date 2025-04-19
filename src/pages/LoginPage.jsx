import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { toast } from "sonner";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useLoginMutation } from "@/redux/api/authApiSlice";
import { LoadingSpinner } from "@/components/ui/loading-spinner";

// Define validation schema
const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required."),
});

export default function LoginPage() {
  const [login, { isLoading }] = useLoginMutation();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/letchat", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  async function onSubmit({ email, password }) {
    try {
      await login({ email, password }).unwrap();
    } catch (error) {
      toast.error(error || "Login failed.");
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <Card className="w-full max-w-md shadow-lg rounded-xl">
        <CardHeader>
          <CardTitle className="text-center text-xl font-bold">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      {...field}
                      disabled={isLoading}
                      className="disabled:opacity-100 "
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      {...field}
                      disabled={isLoading}
                      className="disabled:opacity-100 "
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center px-4 py-2 text-white rounded disabled:opacity-100 disabled:bg-[#2F2F32]"
              >
                {isLoading && <LoadingSpinner className="mr-2 h-4 w-4" />}
                {isLoading ? "Processing..." : "Log In"}
              </Button>
            </form>
          </Form>
          <div className="mt-4 flex justify-between">
            {/* ForgotPassword Link */}
            <p className="text-sm">
              Forgot your password?
              <Link to="/auth/login" className="text-blue-600 hover:underline">
                {" "}
                Reset
              </Link>
            </p>
            {/* Register Link */}
            <p className="text-sm">
              <Link to="/auth/signup" className="text-blue-600 hover:underline">
                Register
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
