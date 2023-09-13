import { FC, useEffect } from 'react';
import './UserLocation.scss';

import { Icon } from '@components/UI';
import { useAppDispatch, useAppSelector } from '@store/index';
import { getUserLocationAction } from '@store/userLocationActions';
import { selectUserLocation } from '@store/userLocationSlice';

const UserLocation: FC = () => {
  const dispatch = useAppDispatch();
  const userLocation = useAppSelector(selectUserLocation);

  useEffect(() => {
    dispatch(getUserLocationAction());
  }, [dispatch]);

  if (!userLocation) {
    return;
  }

  return (
    <div>
      <div className="location-static">
        <Icon extendedClass="location-icon" icon="person_pin_circle" />
        <span>Location:</span>
      </div>
      <div className="location-dynamic">
        <span>{userLocation.city_with_code}</span>
        <img className="flag" src={userLocation.flag_svg} alt={'Flag of ' + userLocation.country} />
      </div>
    </div>
  );
};

export default UserLocation;
