import { FC, JSX } from "react";
import SubscribeForm from "./subscribe-form";

const FooterContent: FC = (): JSX.Element => {
  return (
    <div className="flex flex-row flex-wrap rounded-[20px] bg-light_pink px-4 pb-6 pt-8 sm:px-6 md:px-8 lg:gap-x-4 lg:gap-y-24 lg:rounded-[28px] lg:px-10 lg:pb-8 lg:pt-10">
      <div className="grid w-full grid-cols-1 lg:grid-cols-[380px_auto] lg:gap-x-14 lg:gap-y-8 xl:gap-x-36">
        <div className="flex flex-col gap-y-6 lg:gap-y-10">
          <div>
            <h2 className="mt-0 mb-5 font-pp_sans text-5xl text-primary uppercase">
              Sip, Savor, Subscribe.
            </h2>

            <SubscribeForm />

            <p className="text-primary text-[13px] font-medium mt-5">
              <b>Don&apos;t miss a drop!</b> Sign up to Club Cafely to receive
              personalized offers and coffee wisdom directly to your inbox.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterContent;
