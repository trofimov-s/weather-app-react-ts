import { Weather } from '@models/weather.interface';
import { FC } from 'react';
import './ForecastCardItem.scss';
import Card from '@components/UI/Card';
import Unit from '@components/UI/Unit';
import { UNITS } from '@enums/units.enum';
import { UNITS_MAP } from '@constants/units-map.constant';
import { matToDailyForecast } from '@utils/mat-to-daily-forecast.function';

type Props = {
  dayForecast: Weather[];
  currentUnit: UNITS;
};

const ForecastCardItem: FC<Props> = ({ dayForecast, currentUnit }) => {
  const { temp_min, temp_max, main, icon, date } = matToDailyForecast(dayForecast);
  const unit = UNITS_MAP[currentUnit];

  const buildDate = (date: string): string => {
    const fullDate = new Date(date);

    return `${fullDate.getMonth() + 1}/${fullDate.getDate()}`;
  };

  return (
    <Card extendedClass="forecast-list-card">
      <span>{buildDate(date)}</span>
      <img src={'https://openweathermap.org/img/wn/' + icon + '@2x.png'} alt={main} />
      <span>{main}</span>
      <div className="degress-block">
        <div className="degress-block__item">
          <span className="degress-block__item-title">Min</span>
          <Unit temp={temp_min} unit={unit} />
        </div>
        <div className="degress-block__item">
          <span className="degress-block__item-title">Max</span>
          <Unit temp={temp_max} unit={unit} />
        </div>
      </div>
    </Card>
  );
};

export default ForecastCardItem;
