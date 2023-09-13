import { FC, useEffect, useState } from 'react';
import './ForecastPreviewBody.scss';
import { Weather } from '@models/weather.interface';
import { Unit } from '@components/UI';
import { UNITS_MAP } from '@constants/units-map.constant';
import ForecastInfoList from '../ForecastInfoList/ForecastInfoList';
import { useAppSelector } from '@store/index';
import { ForecastSelectors } from '@store/forecastSelectors';

type Props = {
  dayForecastList: Weather[];
  index: number;
};

const ForecastPreviewBody: FC<Props> = ({ dayForecastList, index }) => {
  const currentUnit = useAppSelector(ForecastSelectors.selectCurrentUnit);
  const unit = UNITS_MAP[currentUnit];
  const [selectedTimeForecast, setSelectedTimeForecast] = useState<Weather>(
    dayForecastList?.[index],
  );

  useEffect(() => {
    setSelectedTimeForecast(dayForecastList?.[index]);
  }, [dayForecastList, index]);

  return (
    <main className="forecast-main">
      <div className="detail-block">
        <div className="detail-block__temp">
          <img
            src={'https://openweathermap.org/img/wn/' + selectedTimeForecast.icon + '@2x.png'}
            alt={selectedTimeForecast.main}
          />
          <Unit temp={selectedTimeForecast.temp} unit={unit} />
        </div>
        <span className="detail-block__main">{selectedTimeForecast.main}</span>
      </div>
      <ForecastInfoList currentUnit={unit} forecast={selectedTimeForecast} />
    </main>
  );
};

export default ForecastPreviewBody;
