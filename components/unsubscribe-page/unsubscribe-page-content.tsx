"use client";

import { FC, JSX, useState } from "react";
import LoadingSpinner from "../ui/loading-spinner";
import { Button } from "../ui/button";
import Link from "next/link";
import { toast } from "sonner";
import { deleteSubscriber } from "@/actions/subscriber.action";

interface Props {
  token: string | "";
}

const UnsubscribePageContent: FC<Props> = ({ token }): JSX.Element => {
  const [loading, setLoading] = useState(false);

  async function onSubmit() {
    setLoading(true);

    try {
      const response = await deleteSubscriber(token);

      if (!response.error) {
        toast.success("Unsubscribed successfully.", {
          description: `${response?.email} have been removed.`,
        });
      } else {
        toast.error(response.error || "Failed to unsubscribe.", {
          description: "Please try again or contact support.",
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred during unsubscription.", {
        description: "Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  }

  if (token === "") {
    return <div>Invalid token</div>;
  }

  return (
    <div className="max-w-md mx-auto bg-white">
      <h1 className="text-2xl leading-[60px] font-bold text-center font-pp_sans text-primary text-[60px] uppercase mt-[42px] mb-6">
        Unsubscribe
      </h1>

      <p className="text-center font-medium text-brown mb-8">
        You’ll stop receiving our latest updates and exclusive offers. Do you
        still want to unsubscribe?
      </p>

      <div className="flex justify-center">
        <Button
          onClick={onSubmit}
          className="w-fit font-bold h-12 px-[32px] text-base"
          disabled={loading}
        >
          {loading ? (
            <>
              <LoadingSpinner className="w-5 h-5" /> Processing...
            </>
          ) : (
            "Confirm"
          )}
        </Button>
      </div>

      <div className="text-center pt-3 text-[13px]">
        <Link href="/" className="text-primary font-semibold underline">
          Cancel
        </Link>
      </div>
    </div>
  );
};

export default UnsubscribePageContent;
