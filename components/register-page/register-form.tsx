"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { createNewUser } from "@/actions/auth.action";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import LoadingSpinner from "../ui/loading-spinner";

// Define form validation schema with optional first_name and last_name
const formSchema = z.object({
  first_name: z.string().optional(),
  last_name: z.string().optional(),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export default function RegisterForm() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Initialize form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    },
  });

  // Form submission handler
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);

    try {
      const response = await createNewUser({
        first_name: values.first_name || "",
        last_name: values.last_name || "",
        email: values.email,
        password: values.password,
      });

      if (!response.error) {
        await signIn("credentials", {
          email: values.email,
          password: values.password,
          redirect: false,
        });
        toast.success("Login successful.", {
          description: "You are now logged in.",
        });
        router.push("/");
      } else {
        toast.error(response.error || "Registration failed.", {
          description: "Please try again.",
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred during registration.", {
        description: "Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-md mx-auto bg-white">
      <h1 className="text-2xl leading-[60px] font-bold text-center font-pp_sans text-primary text-[60px] uppercase mt-[42px] mb-8">
        Create account
      </h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="first_name"
            render={({ field }) => (
              <FormItem className="space-y-[5px]">
                <FormLabel className="uppercase text-[10px] font-bold text-brown">
                  First Name
                </FormLabel>
                <FormControl>
                  <Input
                    className="rounded-[10px] h-[46.5px] border-2 shadow-none placeholder:font-medium placeholder:!text-[15px] text-brown !text-base font-medium"
                    placeholder="First Name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="last_name"
            render={({ field }) => (
              <FormItem className="space-y-[5px]">
                <FormLabel className="uppercase text-[10px] font-bold text-brown">
                  Last Name
                </FormLabel>
                <FormControl>
                  <Input
                    className="rounded-[10px] h-[46.5px] border-2 shadow-none placeholder:font-medium placeholder:!text-[15px] text-brown !text-base font-medium"
                    placeholder="Last Name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="space-y-[5px]">
                <FormLabel className="uppercase text-[10px] font-bold text-brown">
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    className="rounded-[10px] h-[46.5px] border-2 shadow-none placeholder:font-medium placeholder:!text-[15px] text-brown !text-base font-medium"
                    placeholder="Email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="space-y-[5px]">
                <FormLabel className="uppercase text-[10px] font-bold text-brown">
                  Password
                </FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    className="rounded-[10px] h-[46.5px] border-2 shadow-none placeholder:font-medium placeholder:!text-[15px] text-brown !text-base font-medium"
                    placeholder="Password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-center pt-4">
            <Button
              type="submit"
              className="w-fit font-bold h-12 px-[32px] text-base"
              disabled={loading}
            >
              {loading ? (
                <>
                  <LoadingSpinner className="w-5 h-5" /> Processing...
                </>
              ) : (
                "Submit"
              )}
            </Button>
          </div>

          <div className="text-center pt-3 text-[13px]">
            <span className="text-brown font-medium">
              Already have an account?{" "}
            </span>

            <Link
              href="/account/login"
              className="text-primary font-semibold underline"
            >
              Login
            </Link>
          </div>

          <div className="text-center">
            <Link
              href="/account/forgot-password"
              className="text-center text-[13px] text-primary font-semibold underline"
            >
              Forgot Password?
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
}
