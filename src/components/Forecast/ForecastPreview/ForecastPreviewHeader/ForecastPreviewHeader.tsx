import { FC, useCallback, useMemo } from 'react';
import './ForecastPreviewHeader.scss';

import { Icon } from '@components/UI';
import { UNITS } from '@enums/units.enum';
import { UNITS_MAP } from '@constants/units-map.constant';
import { useAppDispatch, useAppSelector } from '@store/index';
import { ForecastActions } from '@store/forecastActions';
import { ForecastSelectors } from '@store/forecastSelectors';

function isFavorite(cities: string[], city: string): boolean {
  return cities.includes(city.toLowerCase());
}

const ForecastPreviewHeader: FC = () => {
  const dispatch = useAppDispatch();
  const forecast = useAppSelector(ForecastSelectors.extractForecast);
  const currentUnit = useAppSelector(ForecastSelectors.selectCurrentUnit);
  const favoriteCities = useAppSelector(ForecastSelectors.selectFavoriteCities);
  const units = useMemo(() => Object.entries(UNITS_MAP) as [UNITS, string][], []);

  const toggleFavorite = useCallback(() => {
    dispatch(ForecastActions.toggleFavorite(forecast.city));
  }, [dispatch, forecast.city]);

  const changeUnitHanlder = useCallback(
    (unit: UNITS) => {
      if (unit !== currentUnit) {
        dispatch(ForecastActions.changeUnit(unit));
      }
    },
    [currentUnit, dispatch],
  );

  return (
    <header className="forecast-preview__header">
      <div className="title-block">
        <p className="title-block__title">CURRENT WEATHER</p>
        <p className="title-block__subtitle">{`${forecast.city}, ${forecast.country}`}</p>
      </div>
      <div className="action-block">
        <Icon
          icon="star"
          extendedClass={`star ${
            isFavorite(favoriteCities, forecast.city) ? 'text-yellow-500' : ''
          }`}
          clickHanlder={toggleFavorite}
        />
        <div className="action-block__units">
          {units.map(([value, displayValue]) => (
            <span
              key={value}
              className={currentUnit === value ? 'unit-selected' : ''}
              onClick={() => changeUnitHanlder(value)}
            >
              {displayValue}
            </span>
          ))}
        </div>
      </div>
    </header>
  );
};

export default ForecastPreviewHeader;
