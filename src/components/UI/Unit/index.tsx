import { FC } from 'react';
import './Unit.scss';

type Props = {
  temp: number;
  unit: string;
};

const Unit: FC<Props> = ({ temp, unit }) => {
  return (
    <span className="degrees">
      {`${temp}°`}
      <span className="temp-units">{unit}</span>
    </span>
  );
};

export default Unit;
