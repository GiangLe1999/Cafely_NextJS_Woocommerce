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
import { createNewUserAddress } from "@/actions/user-address.action";
import { toast } from "sonner";
import LoadingSpinner from "../ui/loading-spinner";

interface Props {
  setShowAddNewAddressForm: React.Dispatch<React.SetStateAction<boolean>>;
  user_id: number;
}

// Schema validation
const addressFormSchema = z.object({
  firstName: z.string().min(1, { message: "Please enter your first name" }),
  lastName: z.string().min(1, { message: "Please enter your last name" }),
  company: z.string().optional(),
  address1: z.string().min(1, { message: "Please enter your address" }),
  address2: z.string().optional(),
  city: z.string().min(1, { message: "Please enter your city" }),
  countryRegion: z
    .string()
    .min(1, { message: "Please select a country/region" }),
  stateProvince: z
    .string()
    .min(1, { message: "Please select a state/province" }),
  postalZipCode: z
    .string()
    .min(1, { message: "Please enter a postal/ZIP code" }),
  phone: z.string().min(1, { message: "Please enter your phone number" }),
  isDefault: z.boolean().default(false),
});

type AddressFormValues = z.infer<typeof addressFormSchema>;

export default function AddressForm({
  setShowAddNewAddressForm,
  user_id,
}: Props) {
  const [loading, setLoading] = React.useState(false);

  const form = useForm<AddressFormValues>({
    resolver: zodResolver(addressFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      company: "",
      address1: "",
      address2: "",
      city: "",
      countryRegion: "United States",
      stateProvince: "Alabama",
      postalZipCode: "",
      phone: "",
      isDefault: false,
    },
  });

  async function onSubmit(values: AddressFormValues) {
    setLoading(true);

    try {
      const response = await createNewUserAddress({
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
        toast.success("Address added successfully.", {
          description: "Your new address has been saved.",
        });
        setShowAddNewAddressForm(false);
        form.reset();
      } else {
        toast.error(response.error || "Failed to add address.", {
          description: "Please try again.",
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while adding the address.", {
        description: "Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  }

  function onCancel() {
    form.reset();
    setShowAddNewAddressForm(false);
  }

  return (
    <div className="mx-auto mt-10">
      <h2 className="text-brown text-xl font-bold mb-4">Add new address</h2>

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
                    defaultValue={countries[0].value}
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
                    defaultValue={statesAndProvinces[0].value}
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
                  "Add address"
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
