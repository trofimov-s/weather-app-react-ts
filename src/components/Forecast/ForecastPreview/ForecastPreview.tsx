import { FC, useEffect, useState } from 'react';
import './ForecastPreview.scss';
import { Card, Loader } from '@components/UI';
import ForecastPreviewHeader from './ForecastPreviewHeader/ForecastPreviewHeader';
import ForecastPreviewBody from './ForecastPreviewBody/ForecastPreviewBody';
import ForecastTimeTabs from './ForecastTimeTabs/ForecastTimeTabs';
import { useAppSelector } from '@store/index';
import { ForecastSelectors } from '@store/forecastSelectors';

type Props = {
  error: string;
  forecastStateIsEmpty: boolean;
};

const ForecastPreview: FC<Props> = ({ error, forecastStateIsEmpty }) => {
  const isLoading = useAppSelector(ForecastSelectors.selectLoading);
  const dayForecastList = useAppSelector(ForecastSelectors.selectForecastDay);
  const [selectedTimeIndex, setSelectedTimeIndex] = useState(0);

  useEffect(() => {
    setSelectedTimeIndex(0);
  }, [dayForecastList]);

  const selectedTimeChangeHanlder = (index: number): void => {
    if (index !== selectedTimeIndex) {
      setSelectedTimeIndex(index);
    }
  };

  if (error) {
    return <h3 className="error-msg">{error}</h3>;
  }

  console.log(forecastStateIsEmpty)
  if (forecastStateIsEmpty && !isLoading) {
    return <p className='fallback'>Welcome! Start to search city forecast!</p>
  }

  return (
    <Card extendedClass="forecast-preview-card">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <ForecastPreviewHeader />
          <ForecastPreviewBody dayForecastList={dayForecastList} index={selectedTimeIndex} />
          <ForecastTimeTabs
            forecastsByTime={dayForecastList}
            selectedItemIndex={selectedTimeIndex}
            handleItemSelection={selectedTimeChangeHanlder}
          />
        </>
      )}
    </Card>
  );
};

export default ForecastPreview;
