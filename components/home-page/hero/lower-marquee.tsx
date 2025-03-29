import BonAppetitLogo from "@/components/icons/bon-appetit-logo";
import EntrepreneurLogo from "@/components/icons/entrepreneur-logo";
import FoodLogo from "@/components/icons/food-logo";
import ForbesLogo from "@/components/icons/forbes-logo";
import TheNewYorkTimesLogo from "@/components/icons/the-new-york-times-logo";
import TheWallStreetJournalLogo from "@/components/icons/the-wall-street-journal-logo";
import { FC, JSX } from "react";
import Marquee from "react-fast-marquee";

const LowerMarquee: FC = (): JSX.Element => {
  return (
    <Marquee
      gradient={false}
      speed={40}
      loop={0}
      className="py-6"
      direction="right"
    >
      <ul className="md:ml-20 ml-8 no-li flex flex-shrink-0 animate-marquee-reverse items-center gap-8 will-change-transform md:gap-20">
        <li>
          <EntrepreneurLogo />
        </li>
        <li>
          <FoodLogo />
        </li>
        <li>
          <TheWallStreetJournalLogo />
        </li>
        <li>
          <ForbesLogo />
        </li>
        <li>
          <TheNewYorkTimesLogo />
        </li>
        <li>
          <BonAppetitLogo />
        </li>
      </ul>
    </Marquee>
  );
};

export default LowerMarquee;
