import { FC } from 'react';
import Search from '@components/Search/Search';
import Favorite from '@components/Favorite/Favorite';
import ForecastPreview from './ForecastPreview/ForecastPreview';
import ForecastCards from './ForecastCards/ForecastCards';
import { RootState, useAppSelector } from '@store/index';
import { ForecastSelectors } from '@store/forecastSelectors';

const Forecast: FC = () => {
  const { currentUnit } = useAppSelector((state: RootState) => state.forecast);
  const forecast = useAppSelector(ForecastSelectors.extractForecast);

  // console.log(forecast, 'asdfasdf', currentUnit);

  if (!forecast) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Search />
      <Favorite />
      <ForecastPreview currentUnit={currentUnit} />
      <ForecastCards currentUnit={currentUnit} />
    </>
  );
};

export default Forecast;
