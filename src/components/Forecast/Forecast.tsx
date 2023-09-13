import { FC } from 'react';
import Search from '@components/Search/Search';
import ForecastPreview from './ForecastPreview/ForecastPreview';
import ForecastCards from './ForecastCards/ForecastCards';
import { useAppSelector } from '@store/index';
import { ForecastSelectors } from '@store/forecastSelectors';
import Favorite from '@components/Favorite/Favorite';

const Forecast: FC = () => {
  const error = useAppSelector(ForecastSelectors.selectError);

  return (
    <>
      <Search />
      <Favorite />
      <ForecastPreview error={error} />
      {!error && <ForecastCards />}
    </>
  );
};

export default Forecast;
