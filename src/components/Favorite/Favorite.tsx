import { FC } from 'react';
import './Favorite.scss';
import { ExpansionPanel } from '@components/UI';
import FavoriteCityList from './FavoriteCityList/FavoriteCityList';
import { useSelector } from 'react-redux';
import { ForecastSelectors } from '@store/forecastSelectors';

const Favorite: FC = () => {
  const favoriteCities: string[] = useSelector(ForecastSelectors.selectFavoriteCities);

  return (
    <ExpansionPanel title="Favorite cities">
      {favoriteCities.length ? (
        <FavoriteCityList favoriteCities={favoriteCities} />
      ) : (
        <p className="fallback">Please, add some cities to favorite</p>
      )}
    </ExpansionPanel>
  );
};

export default Favorite;
