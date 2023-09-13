import { FC } from 'react';
import './ForecastPreviewBody.scss';
import { Weather } from '@models/weather.interface';
import Unit from '@components/UI/Unit';
import { UNITS } from '@enums/units.enum';
import { UNITS_MAP } from '@constants/units-map.constant';
import ForecastInfoList from '../ForecastInfoList/ForecastInfoList';

type Props = {
  forecast: Weather;
  currentUnit: UNITS;
};

const ForecastPreviewBody: FC<Props> = ({ forecast, currentUnit }) => {
  const unit = UNITS_MAP[currentUnit];

  return (
    <main className="forecast-main">
      <div className="detail-block">
        <div className="detail-block__temp">
          <img
            src={'https://openweathermap.org/img/wn/' + forecast.icon + '@2x.png'}
            alt={forecast.main}
          />
          <Unit temp={forecast.temp} unit={unit} />
        </div>
        <span className="detail-block__main">{forecast.main}</span>
      </div>
      <ForecastInfoList currentUnit={unit} forecast={forecast} />
    </main>
  );
};

export default ForecastPreviewBody;
