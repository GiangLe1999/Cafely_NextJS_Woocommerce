import UserAddressesPageContent from "@/components/user-addresses-page/user-addresses-page-content";
import { authOptions } from "@/lib/authOptions";
import { getUserAddresses } from "@/queries/user-address.query";
import { NextPage } from "next";
import { getServerSession } from "next-auth";

const Page: NextPage = async () => {
  const session = await getServerSession(authOptions);
  const userAddresses = await getUserAddresses(session?.user?.id || 0);
  return (
    <UserAddressesPageContent
      userAddresses={userAddresses}
      user_id={session?.user?.id || 0}
    />
  );
};

export default Page;
