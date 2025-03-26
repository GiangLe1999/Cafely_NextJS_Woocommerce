"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import LoadingSpinner from "@/components/ui/loading-spinner";
import { MoveRight } from "lucide-react";
import { createNewSubscriber } from "@/actions/subscriber.action";

// Define form validation schema
const formSchema = z.object({
  email: z.string().email("Invalid email"),
});

export default function SubscribeForm() {
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
      const response = await createNewSubscriber(values.email);

      if (!response.error) {
        toast.success("Subscribed successfully!", {
          description: "You have been added to our mailing list.",
        });
        form.reset();
      } else {
        toast.error(response.error || "Subscription failed.", {
          description: "Please try again.",
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred during subscription.", {
        description: "Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex items-center bg-white rounded-[10px] h-[46.5px] relative">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input
                      className="bg-white rounded-[10px] border-none shadow-none placeholder:font-medium placeholder:text-primary placeholder:!text-[15px] text-primary !text-base font-medium"
                      placeholder="Enter your e-mail"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="absolute -top-[25px] left-3" />
                </FormItem>
              )}
            />

            <button
              type="submit"
              disabled={loading}
              className="aspect-square w-[46.5px] grid place-content-center text-primary"
            >
              {loading ? (
                <>
                  <LoadingSpinner className="w-5 h-5" />
                </>
              ) : (
                <>
                  <MoveRight className="w-5 h-5" />
                </>
              )}
            </button>
          </div>
        </form>
      </Form>
    </div>
  );
}
