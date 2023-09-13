import { Unit } from '@components/UI';
import { FC } from 'react';
import './ForecastInfoList.scss';
import { Weather } from '@models/weather.interface';
import { ForecastListOptions } from '@constants/forecast-list-options.constant';

type Props = {
  forecast: Weather;
  currentUnit: string;
};

const ForecastInfoList: FC<Props> = ({ forecast, currentUnit }) => {
  return (
    <ul className="info-block">
      {ForecastListOptions.map(({ title, key, type }) => {
        return (
          <li className="info-block__item" key={key}>
            <span className="info-block__item-title">{title}</span>
            {type === 'units' ? (
              <Unit temp={forecast[key] as number} unit={currentUnit} />
            ) : (
              <span className="info-block__item-value">{forecast[key]}</span>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default ForecastInfoList;
