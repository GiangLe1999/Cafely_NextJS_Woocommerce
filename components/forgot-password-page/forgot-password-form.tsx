"use client";

import { useState } from "react";
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
import { forgotPassword } from "@/actions/auth.action";

// Define form validation schema
const formSchema = z.object({
  email: z.string().email("Invalid email"),
});

export default function ForgotPasswordForm() {
  const [loading, setLoading] = useState(false);

  // Initialize form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  // Form submission handler
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);

    try {
      const response = await forgotPassword(values.email);

      if (!response.error) {
        toast.success("Email sent successfully.", {
          description: "Check your inbox for further instructions.",
        });
      } else {
        toast.error(response.error || "Failed to send email.", {
          description: "Please try again.",
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred during sending the email.", {
        description: "Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-md mx-auto bg-white">
      <h1 className="text-2xl leading-[72px] font-bold text-center font-pp_sans text-primary text-[72px] uppercase mt-[42px] mb-6">
        Reset password
      </h1>

      <p className="text-center font-medium text-brown mb-8">
        Enter your email address below and check your inbox for instructions to
        reset your password.
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="space-y-[5px]">
                <FormLabel className="uppercase text-[10px] font-bold text-brown">
                  Enter your email
                </FormLabel>
                <FormControl>
                  <Input
                    className="rounded-[10px] h-[46.5px] border-2 shadow-none placeholder:font-medium placeholder:!text-[15px] text-brown !text-base font-medium"
                    placeholder="Enter your email"
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
            <Link
              href="/account/login"
              className="text-primary font-semibold underline"
            >
              Cancel
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
}
