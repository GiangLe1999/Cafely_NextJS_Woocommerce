import UnsubscribePageContent from "@/components/unsubscribe-page/unsubscribe-page-content";

interface Props {
  searchParams: Promise<{ token?: string }>;
}

const Page = async ({ searchParams }: Props) => {
  const { token } = await searchParams;
  return <UnsubscribePageContent token={token || ""} />;
};

export default Page;
