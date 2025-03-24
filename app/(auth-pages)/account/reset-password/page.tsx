import ResetPasswordForm from "@/components/reset-password-page/reset-password-form";

interface Props {
  searchParams: Promise<{ token?: string }>;
}

const page = async ({ searchParams }: Props) => {
  const { token } = await searchParams;
  return <ResetPasswordForm token={token || ""} />;
};

export default page;
