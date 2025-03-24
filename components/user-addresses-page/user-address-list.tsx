import { FC, JSX } from "react";
import UserAddress from "./user-address";

interface Props {
  userAddresses: any;
  user_id: number;
}

const UserAddressList: FC<Props> = ({
  userAddresses,
  user_id,
}): JSX.Element => {
  return (
    <div className="text-center mt-[54px]">
      <ul className="text-brown space-y-8">
        {!userAddresses?.error &&
          userAddresses?.map((userAddress: any) => (
            <li key={userAddress.id} className="font-medium">
              <UserAddress userAddress={userAddress} user_id={user_id} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default UserAddressList;
