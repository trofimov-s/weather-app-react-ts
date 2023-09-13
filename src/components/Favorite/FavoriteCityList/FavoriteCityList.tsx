import { FC, useCallback } from 'react';
import './FavoriteCityList.scss';
import FavoriteCityListItem from '../FavoriteCityListItem/FavoriteCityListItem';
import { useAppDispatch } from '@store/index';
import { setSelectedCity } from '@store/forecastSlice';

type Props = {
  favoriteCities: string[];
};

const FavoriteCityList: FC<Props> = ({ favoriteCities }) => {
  const dispatch = useAppDispatch();
  const selectCityHanlder = useCallback(
    (city: string): void => {
      dispatch(setSelectedCity(city));
    },
    [dispatch],
  );

  return (
    <ul className="favorite-list">
      {favoriteCities.map((city: string) => (
        <li key={city} className="favorite-list__item" onClick={() => selectCityHanlder(city)}>
          <FavoriteCityListItem city={city} />
        </li>
      ))}
    </ul>
  );
};

export default FavoriteCityList;
