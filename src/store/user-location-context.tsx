import UserLocationApi from '@api/user-lcoation-api';
import { UserLocationData } from '@models/user-location-data.interface';
import { FC, PropsWithChildren, createContext, useEffect, useState } from 'react';

export const UserLocationContext = createContext<UserLocationData>(null);
const api = UserLocationApi;

const UserLocationContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [userLocation, setUserLocation] = useState<UserLocationData>(null);

  console.log('context');

  useEffect(() => {
    api.getUserLocation().then((res) => setUserLocation(res));
  }, []);

  return (
    <UserLocationContext.Provider value={userLocation}>{children}</UserLocationContext.Provider>
  );
};

export default UserLocationContextProvider;
