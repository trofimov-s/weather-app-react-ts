import { timeConvert } from '@utils/time-convert.function';
import { FC } from 'react';
import './ForecastTimeTabItem.scss';

type Props = {
  time: string;
  handleItemSelection: (i: number) => void;
  index: number;
  selectedItemIndex: number;
};

const ForecastTimeTabItem: FC<Props> = ({
  time,
  handleItemSelection,
  index,
  selectedItemIndex,
}) => {
  return (
    <li
      className={'forecast-list__item' + (selectedItemIndex === index ? ' selected' : '')}
      onClick={handleItemSelection.bind(null, index)}
    >
      {timeConvert(time)}
    </li>
  );
};

export default ForecastTimeTabItem;
