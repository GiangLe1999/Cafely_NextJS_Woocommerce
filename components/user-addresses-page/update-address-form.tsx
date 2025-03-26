"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
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
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { statesAndProvinces, countries } from "@/constants";
import { updateUserAddress } from "@/actions/user-address.action";
import { toast } from "sonner";
import LoadingSpinner from "../ui/loading-spinner";
import { addressFormSchema } from "./add-new-address-form";

interface Props {
  userAddress: any;
  setShowUpdateAddressForm: React.Dispatch<React.SetStateAction<boolean>>;
  user_id: number;
}

type AddressFormValues = z.infer<typeof addressFormSchema>;

export default function UpdateAddressForm({
  userAddress,
  setShowUpdateAddressForm,
  user_id,
}: Props) {
  const [loading, setLoading] = React.useState(false);

  // Initialize the form with existing address data
  const form = useForm<AddressFormValues>({
    resolver: zodResolver(addressFormSchema),
    defaultValues: {
      firstName: userAddress.first_name,
      lastName: userAddress.last_name,
      company: userAddress?.company || "",
      address1: userAddress.address_line1,
      address2: userAddress?.address_line2 || "",
      city: userAddress.city,
      countryRegion: userAddress.country,
      stateProvince: userAddress.state,
      postalZipCode: userAddress.postcode,
      phone: userAddress.phone,
      isDefault: userAddress.is_default == "1" ? true : false,
    },
  });

  async function onSubmit(values: AddressFormValues) {
    setLoading(true);

    try {
      const response = await updateUserAddress({
        address_id: userAddress.id,
        user_id,
        first_name: values.firstName,
        last_name: values.lastName,
        company: values.company,
        address_1: values.address1,
        address_2: values.address2,
        city: values.city,
        state_province: values.stateProvince,
        country_region: values.countryRegion,
        postal_zip_code: values.postalZipCode,
        phone: values.phone,
        is_default: values.isDefault,
      });

      if (!response.error) {
        toast.success("Address updated successfully.", {
          description: "Your address has been saved.",
        });
        setShowUpdateAddressForm(false);
        // Refresh address data in parent component if callback provided
      } else {
        toast.error(response.error || "Failed to update address.", {
          description: "Please try again.",
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while updating the address.", {
        description: "Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  }

  function onCancel() {
    setShowUpdateAddressForm(false);
  }

  return (
    <div className="mx-auto mt-8">
      <h2 className="text-brown text-xl font-bold mb-4">Edit address</h2>

      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
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
              name="lastName"
              render={({ field }) => (
                <FormItem>
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
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="uppercase text-[10px] font-bold text-brown">
                    Company
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="rounded-[10px] h-[46.5px] border-2 shadow-none placeholder:font-medium placeholder:!text-[15px] text-brown !text-base font-medium"
                      placeholder="Company"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="address1"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="uppercase text-[10px] font-bold text-brown">
                    Address 1
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="rounded-[10px] h-[46.5px] border-2 shadow-none placeholder:font-medium placeholder:!text-[15px] text-brown !text-base font-medium"
                      placeholder="Address 1"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="address2"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="uppercase text-[10px] font-bold text-brown">
                    Address 2
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="rounded-[10px] h-[46.5px] border-2 shadow-none placeholder:font-medium placeholder:!text-[15px] text-brown !text-base font-medium"
                      placeholder="Address 2"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="uppercase text-[10px] font-bold text-brown">
                    City
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="rounded-[10px] h-[46.5px] border-2 shadow-none placeholder:font-medium placeholder:!text-[15px] text-brown !text-base font-medium"
                      placeholder="City"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="countryRegion"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="uppercase text-[10px] font-bold text-brown">
                    Country/Region
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="rounded-[10px] h-[46.5px] border-2 border-border shadow-none placeholder:font-medium placeholder:!text-[15px] text-brown !text-base font-medium">
                        <SelectValue placeholder="Select a country" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {countries.map((country) => (
                        <SelectItem key={country.value} value={country.value}>
                          {country.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="stateProvince"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="uppercase text-[10px] font-bold text-brown">
                    State/Province
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="rounded-[10px] h-[46.5px] border-2 border-border shadow-none placeholder:font-medium placeholder:!text-[15px] text-brown !text-base font-medium">
                        <SelectValue placeholder="Select a state" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {statesAndProvinces.map((state) => (
                        <SelectItem key={state.value} value={state.value}>
                          {state.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="postalZipCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="uppercase text-[10px] font-bold text-brown">
                    Postal/ZIP Code
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="rounded-[10px] h-[46.5px] border-2 shadow-none placeholder:font-medium placeholder:!text-[15px] text-brown !text-base font-medium"
                      placeholder="Postal/ZIP code"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="uppercase text-[10px] font-bold text-brown">
                    Phone
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="rounded-[10px] h-[46.5px] border-2 shadow-none placeholder:font-medium placeholder:!text-[15px] text-brown !text-base font-medium"
                      placeholder="Phone"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="isDefault"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="text-[13px] text-brown font-semibold cursor-pointer">
                      Set As Default Address
                    </FormLabel>
                  </div>
                </FormItem>
              )}
            />

            <div className="flex flex-col gap-2 pt-2 items-center">
              <Button
                type="submit"
                className="h-12 font-bold text-base px-5 py-3 w-fit"
              >
                {loading ? (
                  <>
                    <LoadingSpinner className="w-5 h-5" /> Processing...
                  </>
                ) : (
                  "Update address"
                )}
              </Button>
              <Button
                type="button"
                onClick={onCancel}
                variant="link"
                className="text-primary underline text-[13px]"
              >
                Cancel
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
