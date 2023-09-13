import { FC, useCallback } from 'react';
import './FavoriteCityList.scss';
import FavoriteCityListItem from '../FavoriteCityListItem/FavoriteCityListItem';
import { useAppDispatch, useAppSelector } from '@store/index';
import { setSelectedCity } from '@store/forecastSlice';
import { ForecastSelectors } from '@store/forecastSelectors';
import { Loader } from '@components/UI';

type Props = {
  favoriteCities: string[];
};

const FavoriteCityList: FC<Props> = ({ favoriteCities }) => {
  const dispatch = useAppDispatch();
  const isBatchLoading = useAppSelector(ForecastSelectors.selectBatchLoading);
  const selectCityHanlder = useCallback(
    (city: string): void => {
      dispatch(setSelectedCity(city));
    },
    [dispatch],
  );

  if (isBatchLoading) {
    return <Loader />;
  }

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
