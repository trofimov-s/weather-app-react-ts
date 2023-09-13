import { Weather } from '@models/weather.interface';
import { FC } from 'react';
import './ForecastTimeTabs.scss';
import ForecastTimeTabItem from '../ForecastTimeTabItem/ForecastTimeTabItem';

type Props = {
  forecastsByTime: Weather[];
  handleItemSelection: (index: number) => void;
  selectedItemIndex: number;
};

const ForecastTimeTabs: FC<Props> = ({
  forecastsByTime,
  handleItemSelection,
  selectedItemIndex,
}) => {
  return (
    <ul className="forecast-list">
      {forecastsByTime.map((forecast: Weather, i: number) => (
        <ForecastTimeTabItem
          key={forecast.date}
          handleItemSelection={handleItemSelection}
          selectedItemIndex={selectedItemIndex}
          index={i}
          time={forecast.date}
        />
      ))}
    </ul>
  );
};

export default ForecastTimeTabs;
