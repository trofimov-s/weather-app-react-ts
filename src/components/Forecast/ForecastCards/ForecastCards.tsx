import { FC, useCallback } from 'react';
import './ForecastCards.scss';
import ForecastCardItem from './ForecastCardItem/ForecastCardItem';
import { UNITS } from '@enums/units.enum';
import { useAppDispatch, useAppSelector } from '@store/index';
import { setSelectedDay } from '@store/forecastSlice';
import { ForecastSelectors } from '@store/forecastSelectors';

type Props = {
  currentUnit: UNITS;
};

const ForecastCards: FC<Props> = ({ currentUnit }) => {
  const dispatch = useAppDispatch();
  const selectSelectedDate = useAppSelector(ForecastSelectors.selectSelectedDate);
  const { forecastDates, list } = useAppSelector(ForecastSelectors.extractForecast);

  const selectDayHandler = useCallback(
    (day: string) => {
      dispatch(setSelectedDay(day));
    },
    [dispatch],
  );

  return (
    <div className="card-list-wrapper">
      <ul className="forecast-card-list">
        {forecastDates.map((day: string) => (
          <li
            className={day === selectSelectedDate ? 'selected' : ''}
            key={day}
            onClick={selectDayHandler.bind(null, day)}
          >
            <ForecastCardItem dayForecast={list[day]} currentUnit={currentUnit} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ForecastCards;
