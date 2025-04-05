import CheckCircleIcon from "@/components/icons/check-circle";
import CrossCircleIcon from "@/components/icons/cross-circle";
import GlassVsLogoIcon from "@/components/icons/glass-vs-logo";
import Heading2 from "@/components/ui/heading-2";
import { FC, JSX } from "react";

const TheDifference: FC = (): JSX.Element => {
  return (
    <div className="relative border-b border-b-app-lavender md:pt-12 md:pb-[60px] pt-9 pb-[45px]">
      <div className="container flex flex-col overflow-hidden py-4 text-center items-center">
        <Heading2 content="The Cafely Difference" className="md:mb-6" />

        <div className="mx-auto mt-4 max-w-[50rem] md:mt-8">
          <table className="compare-table w-full table-fixed border-separate border-spacing-0">
            <tbody>
              {/* Row 1 */}
              <tr>
                <th className="!pl-0"></th>
                <td>
                  <span className="inline-block max-w-40">
                    <GlassVsLogoIcon className="w-full" />
                  </span>
                </td>
                <td>
                  <span>Other Brands</span>
                </td>
              </tr>

              {/* Row 2 */}
              <tr>
                <th>Bold & Authentic Flavor</th>
                <td>
                  <CheckCircleIcon className="w-6 h-6 text-primary" />
                </td>
                <td>
                  <CrossCircleIcon className="w-6 h-6 text-[#89685c]" />
                </td>
              </tr>

              {/* Row 3 */}
              <tr>
                <th>Organically Grown</th>
                <td>
                  <CheckCircleIcon className="w-6 h-6 text-primary" />
                </td>
                <td>
                  <CrossCircleIcon className="w-6 h-6 text-[#89685c]" />
                </td>
              </tr>

              {/* Row 4 */}
              <tr>
                <th>Energy On The Go</th>
                <td>
                  <CheckCircleIcon className="w-6 h-6 text-primary" />
                </td>
                <td>
                  <CrossCircleIcon className="w-6 h-6 text-[#89685c]" />
                </td>
              </tr>

              {/* Row 5 */}
              <tr>
                <th>Flavor Profile</th>
                <td>Bold, smooth, creamy</td>
                <td>Inconsistent, sour, acidic, burnt</td>
              </tr>

              {/* Row 6 */}
              <tr>
                <th>Single-Origin Selections</th>
                <td>Exclusive single-origin coffees</td>
                <td>
                  <CrossCircleIcon className="w-6 h-6 text-[#89685c]" />
                </td>
              </tr>

              {/* Row 7 */}
              <tr>
                <th>Green Initiatives</th>
                <td>
                  Contributes to fighting climate change (Rainforest Trust)
                </td>
                <td>
                  <CrossCircleIcon className="w-6 h-6 text-[#89685c]" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TheDifference;
