"use client";
import { useSession, signOut } from "next-auth/react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import {
  getUserAddressCount,
  getUserDefaultAddress,
} from "@/queries/user-address.query";

export default function AccountPageContent() {
  const { data: session } = useSession();

  const user_id = session?.user?.id || 0;

  const { data: defaultAddress, isLoading } = useQuery({
    queryKey: ["default-address", user_id],
    queryFn: () => getUserDefaultAddress(user_id),
    enabled: user_id > 0,
    retry: 2,
  });

  const { data: addressCount } = useQuery({
    queryKey: ["user-address-count", user_id],
    queryFn: () => getUserAddressCount(user_id),
    enabled: user_id > 0,
    retry: 2,
  });

  return (
    <div className="pt-10">
      <div className="flex justify-between items-baseline gap-2">
        <h1 className="text-[60px] leading-[60px] font-bold text-primary uppercase font-pp_sans">
          Hello, {session?.user?.last_name}
        </h1>

        <button
          className="text-primary text-[13px] underline font-medium"
          onClick={() => signOut()}
        >
          Log Out
        </button>
      </div>

      <Button className="w-fit h-12 group p-0 mt-6">
        <Link
          className="flex w-full text-base h-full items-center justify-between gap-6 font-bold text-foreground group-hover:text-white transition duration-500 px-6 py-3"
          href="/collections/all"
        >
          Shop All Products
          <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
        </Link>
      </Button>

      <div className="mt-6 grid grid-cols-1 gap-4 md:mt-11 md:grid-cols-[minmax(0px,1fr)_250px] md:gap-10 lg:gap-20">
        <div>
          <h2 className="text-brown uppercase mt-0 mb-4 font-pp_sans text-2xl">
            Order history (0)
          </h2>
          <p className="text-sm leading-sm text-brown lg:text-base mt-4 font-medium">
            You haven&apos;t placed any orders yet.
          </p>
        </div>

        <div>
          <h2 className="text-brown uppercase mt-0 mb-4 font-pp_sans text-2xl">
            Account details
          </h2>

          {isLoading ? (
            <div className="space-y-1 mb-4">
              <p className="h-6 mr-3 animate-pulse bg-light_pink rounded-2xl"></p>
              <p className="h-6 mr-3 animate-pulse bg-light_pink rounded-2xl"></p>
              <p className="h-6 mr-3 animate-pulse bg-light_pink rounded-2xl"></p>
              <p className="h-6 mr-3 animate-pulse bg-light_pink rounded-2xl"></p>
              <p className="h-6 mr-3 animate-pulse bg-light_pink rounded-2xl"></p>
              <p className="h-6 mr-3 animate-pulse bg-light_pink rounded-2xl"></p>
            </div>
          ) : (
            <>
              {defaultAddress && !defaultAddress?.error && (
                <div className="text-sm md:text-base mb-4">
                  {defaultAddress?.first_name} {defaultAddress?.last_name}{" "}
                  <br />
                  {defaultAddress?.company}
                  <br />
                  {defaultAddress?.address_1}
                  <br />
                  {defaultAddress?.address_2}
                  <br />
                  {defaultAddress?.city}, {defaultAddress?.state}{" "}
                  {defaultAddress?.postcode}
                  <br />
                  {defaultAddress?.country}
                </div>
              )}
            </>
          )}

          <Link
            href="/account/addresses"
            className="text-primary text-[13px] underline font-medium"
          >
            View Addresses (
            {addressCount && !addressCount?.error ? addressCount : 0})
          </Link>
        </div>
      </div>
    </div>
  );
}
