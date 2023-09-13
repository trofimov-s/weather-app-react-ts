import { FC, useCallback } from 'react';
import './ForecastCards.scss';
import ForecastCardItem from './ForecastCardItem/ForecastCardItem';
import { useAppDispatch, useAppSelector } from '@store/index';
import { setSelectedDay } from '@store/forecastSlice';
import { ForecastSelectors } from '@store/forecastSelectors';

const ForecastCards: FC = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(ForecastSelectors.selectLoading);
  const selectSelectedDate = useAppSelector(ForecastSelectors.selectSelectedDate);
  const forecastData = useAppSelector(ForecastSelectors.extractForecast);
  const currentUnit = useAppSelector(ForecastSelectors.selectCurrentUnit);

  const selectDayHandler = useCallback(
    (day: string) => {
      dispatch(setSelectedDay(day));
    },
    [dispatch],
  );

  if (isLoading) {
    return <></>;
  }

  return (
    <div className="card-list-wrapper">
      <ul className="forecast-card-list">
        {forecastData.forecastDates.map((day: string) => (
          <li
            className={day === selectSelectedDate ? 'selected' : ''}
            key={day}
            onClick={selectDayHandler.bind(null, day)}
          >
            <ForecastCardItem dayForecast={forecastData.list[day]} currentUnit={currentUnit} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ForecastCards;
