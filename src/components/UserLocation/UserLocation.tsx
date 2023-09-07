import { FC, useContext } from 'react';

import { UserLocationData } from '@models/user-location-data.interface';
import { UserLocationContext } from '@store/user-location-context';
import { Icon } from '@components/UI';

const UserLocation: FC = () => {
  const ctx: UserLocationData = useContext(UserLocationContext);
  console.log(ctx);

  if (!ctx) {
    return;
  }

  return (
    <div>
      <div className="flex">
        <Icon fontSize="18px" icon="person_pin_circle" />
        <span>Location:</span>
      </div>
      <div className="flex items-center gap-x-2">
        <span>
          {ctx.city}, {ctx.country}
        </span>
        <img className="h-6" src={ctx.flag_svg} alt={'Flag of ' + ctx.country} />
      </div>
    </div>
  );
};

export default UserLocation;
