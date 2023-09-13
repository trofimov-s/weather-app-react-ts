import { FC, useEffect, useState } from 'react';
import './ForecastPreview.scss';
import Card from '@components/UI/Card';
import { UNITS } from '@enums/units.enum';
import ForecastPreviewHeader from './ForecastPreviewHeader/ForecastPreviewHeader';
import ForecastPreviewBody from './ForecastPreviewBody/ForecastPreviewBody';
import { Weather } from '@models/weather.interface';
import ForecastTimeTabs from './ForecastTimeTabs/ForecastTimeTabs';
import { useAppSelector } from '@store/index';
import { ForecastSelectors } from '@store/forecastSelectors';

type Props = {
  currentUnit: UNITS;
};

const ForecastPreview: FC<Props> = ({ currentUnit }) => {
  const dayForecastList = useAppSelector(ForecastSelectors.selectForecastDay);
  const { city, country } = useAppSelector(ForecastSelectors.extractForecast);
  const [selectedTimeIndex, setSelectedTimeIndex] = useState(0);
  const [selectedTimeForecast, setSelectedTimeForecast] = useState<Weather>(
    dayForecastList[selectedTimeIndex],
  );

  useEffect(() => {
    setSelectedTimeIndex(0);
    setSelectedTimeForecast(dayForecastList[0]);
  }, [dayForecastList]);

  const selectedTimeChangeHanlder = (index: number): void => {
    if (index !== selectedTimeIndex) {
      setSelectedTimeIndex(index);
      setSelectedTimeForecast(dayForecastList[index]);
    }
  };

  return (
    <Card extendedClass="forecast-preview-card">
      <ForecastPreviewHeader currentUnit={currentUnit} city={city} country={country} />
      <ForecastPreviewBody forecast={selectedTimeForecast} currentUnit={currentUnit} />
      <ForecastTimeTabs
        forecastsByTime={dayForecastList}
        selectedItemIndex={selectedTimeIndex}
        handleItemSelection={selectedTimeChangeHanlder}
      />
    </Card>
  );
};

export default ForecastPreview;
