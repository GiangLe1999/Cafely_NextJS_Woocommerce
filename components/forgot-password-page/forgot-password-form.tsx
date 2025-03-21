"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "sonner";

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
import LoadingSpinner from "../ui/loading-spinner";
import { useRouter } from "next/navigation";

// Define form validation schema
const formSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export default function ForgotPasswordForm() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Initialize form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Form submission handler
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);

    try {
      const result = await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: false,
      });

      if (result?.error) {
        toast.error("Email or password is incorrect.", {
          description: "Please try again.",
        });
      } else {
        router.push("/");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while logging in.", {
        description: "Please try again.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-md mx-auto bg-white">
      <h1 className="text-2xl leading-[60px] font-bold text-center font-pp_sans text-primary text-[60px] uppercase mt-[42px] mb-10">
        Welcome Back
      </h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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

          <div className="!mt-2">
            <Link
              href="/account/forgot-password"
              className="text-center text-[13px] text-primary font-semibold underline"
            >
              Forgot Password?
            </Link>
          </div>

          <div className="flex justify-center pt-4">
            <Button
              type="submit"
              className="w-fit font-bold text-brown h-12 px-[32px] rounded-[12px] text-base"
              disabled={loading}
            >
              {loading ? (
                <>
                  <LoadingSpinner className="w-5 h-5" /> Processing...
                </>
              ) : (
                "Sign In"
              )}
            </Button>
          </div>

          <div className="text-center pt-3 text-[13px]">
            <span className="text-brown font-medium">New to CAFELY? </span>

            <Link
              href="/account/register"
              className="text-primary font-semibold underline"
            >
              Register Now
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
}
