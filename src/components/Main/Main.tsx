import { FC } from 'react';

import './Main.scss';
import Forecast from '@components/Forecast/Forecast';

const Main: FC = () => {
  return (
    <main className="main">
      <Forecast />
    </main>
  );
};

export default Main;
