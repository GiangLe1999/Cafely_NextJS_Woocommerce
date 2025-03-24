import { FC, JSX, useState } from "react";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { deleteUserAddress } from "@/actions/user-address.action";

interface Props {
  userAddress: any;
  user_id: number;
}

const UserAddress: FC<Props> = ({ userAddress, user_id }): JSX.Element => {
  const [isDeleting, setIsDeleting] = useState(false);

  const askForDeleteAddress = () => {
    if (confirm("Are you sure you wish to delete this address?")) {
      confirmDeleteAddress();
    }
  };

  async function confirmDeleteAddress() {
    setIsDeleting(true);

    try {
      const response = await deleteUserAddress({
        user_id,
        address_id: parseInt(userAddress.id || "0", 10),
      });

      if (!response.error) {
        toast.success("Address deleted successfully.", {
          description: "The selected address has been removed.",
        });
      } else {
        toast.error(response.error || "Failed to delete address.", {
          description: "Please try again.",
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while deleting the address.", {
        description: "Please try again later.",
      });
    } finally {
      setIsDeleting(false);
    }
  }

  return (
    <>
      {userAddress.is_default == "1" && (
        <h2 className="text-base font-bold md:text-lg lg:text-xl mb-3 md:mb-4">
          Default
        </h2>
      )}
      <p className="leading-6">
        {userAddress.first_name} {userAddress.last_name} <br />
        {userAddress?.company && (
          <>
            {userAddress.company} <br />
          </>
        )}
        {userAddress.address_line1} <br />
        {userAddress?.address_line2 && (
          <>
            {userAddress.address_line2} <br />
          </>
        )}
        {userAddress.state}, {userAddress.city} {userAddress.postcode}
        <br />
        {userAddress.country}
      </p>

      <div className="flex items-center justify-center gap-[14px] mt-2 text-primary font-medium underline underline-offset-4">
        <Button variant="link" className="px-0 text-[13px]" onClick={() => {}}>
          Edit Address
        </Button>

        <Button
          variant="link"
          className="px-0 text-[13px]"
          onClick={askForDeleteAddress}
        >
          {isDeleting ? "Deleting..." : "Delete Address"}
        </Button>
      </div>
    </>
  );
};

export default UserAddress;
