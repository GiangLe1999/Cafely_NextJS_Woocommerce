"use client";

import Link from "next/link";
import { FC, JSX, useState } from "react";
import { Button } from "../ui/button";
import AddNewAddressForm from "./add-new-address-form";
import UserAddressList from "./user-address-list";

interface Props {
  userAddresses: any;
  user_id: number;
}

const UserAddressesPageContent: FC<Props> = ({
  userAddresses,
  user_id,
}): JSX.Element => {
  const [showAddNewAddressForm, setShowAddNewAddressForm] = useState(false);

  return (
    <div className="max-w-[576px] mx-auto bg-white">
      <h1 className="text-2xl leading-[60px] font-bold text-center font-pp_sans text-primary text-[60px] uppercase mt-[42px] mb-6">
        Addresses
      </h1>

      <div className="text-center">
        <Link
          href="/account"
          className="text-center text-[13px] text-primary font-medium underline"
        >
          Return to Account details
        </Link>
      </div>

      <div className="text-center mt-10">
        <Button
          className="h-12 font-bold text-base px-4 py-3"
          onClick={() => setShowAddNewAddressForm(!showAddNewAddressForm)}
        >
          Add a new address
        </Button>
      </div>

      {showAddNewAddressForm && (
        <AddNewAddressForm
          setShowAddNewAddressForm={setShowAddNewAddressForm}
          user_id={user_id}
        />
      )}

      <UserAddressList userAddresses={userAddresses} user_id={user_id} />
    </div>
  );
};

export default UserAddressesPageContent;
