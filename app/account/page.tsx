import AccountPageContent from "@/components/account-page/account-page-content";
import { NextPage } from "next";
import { getSession } from "next-auth/react";

const page: NextPage = async () => {
  const user = await getSession();
  console.log(user);
  return <AccountPageContent />;
};

export default page;
