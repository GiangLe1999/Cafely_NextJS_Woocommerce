import Header from "@/components/layout/header";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { FC, JSX, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const PrivatePagesLayout: FC<Props> = async ({
  children,
}): Promise<JSX.Element> => {
  const session = await getServerSession(authOptions);

  if (!session) redirect("/account/login");

  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default PrivatePagesLayout;
